import * as React from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  Button,
  BackHandler,
  Alert,
} from 'react-native';


import {useDispatch, useSelector} from 'react-redux';
import MapView, {Circle, Marker} from 'react-native-maps';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

import Geolocation from '@react-native-community/geolocation';
import io from 'socket.io-client';

import {beat_subdivision} from '../assign/data';

const Check = ({navigation, beat, user,socket}) => {
  const dispatch = useDispatch();

  // const [socket, setSocket] = React.useState(null);
  const [error, setError] = React.useState('');
  const [userLocation, setUserLocation] = React.useState();
  const [message, setMessage] = React.useState('Determining location...');

  const coordinate = {latitude: 11.924047982381875, longitude: 79.8196753};
  const radius = 200;

  // Initialize the socket connection
  // const initializeSocket = () => {
  //   const newSocket = io('http://10.0.2.2:8000');
  //   setSocket(newSocket);

  //   return () => {
  //     // Disconnect the socket connection when the component unmounts
    
  //       newSocket.disconnect();
    
  //   };
  // };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Ebeats Location Permission',
          message: 'Ebeats App needs access to your location ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const sendLocation = () => {
    // Send location data to the backend server when the user's location changes
    const workerId = user?.userData?.Officer_Id;

    if (socket && userLocation) {
      const {latitude, longitude} = userLocation;
      const data = {
        latitude: latitude,
        longitude: longitude,
        workerId: workerId,
        beat:beat
      };
      socket.emit('workerLocation', data);
      console.log('Sent worker location:', {latitude, longitude, workerId});
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const watchId = Geolocation.watchPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setUserLocation({latitude, longitude});
          console.log(latitude + ' ' + longitude);
          let isInCircle = false;
          for (const location of beat_subdivision[beat] || []) {
            const distance = getDistanceFromLatLonInMeters(
              latitude,
              longitude,
              location.location[0],
              location.location[1],
            );
            if (distance <= radius) {
              isInCircle = true;
              break;
            }
          }

          setMessage(
            isInCircle ? 'You are in a circle' : 'You are not in a circle',
          );
        },
        error => console.log(error.message),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
      );

      return () => Geolocation.clearWatch(watchId); // Cleanup on unmount
    }, []),
  );

  React.useEffect(() => {
    sendLocation();
  }, [socket, userLocation]);

  React.useEffect(() => {
    // initializeSocket();
    requestLocationPermission();
  }, []);

  // press back button to exit app
  React.useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const getDistanceFromLatLonInMeters = (lat1, lon1, lat2, lon2) => {
    const R = 6371e3; // Radius of the Earth in meters
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in meters
    return d;
  };

  return (
    <View className="flex-1  ">
      {/* {checkData?.start_time } */}
      <Text className="pt-5 pl-2">#E-BEAT-PROFILE</Text>
      <View className="items-center justify-center  gap-6">
        <MapView
          className=" w-full min-h-[400px]"
          moveOnMarkerPress={false}
          initialRegion={{
            ...coordinate,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: userLocation ? userLocation.latitude : 0,
              longitude: userLocation ? userLocation.longitude : 0,
            }}
            title={'mine'}
          />
          {beat_subdivision[beat] &&
            beat_subdivision[beat].map((location, index) => (
              <Circle
                key={index}
                center={{
                  latitude: location.location[0],
                  longitude: location.location[1],
                }}
                radius={radius}
                strokeColor={location.color} // Blue color with 50% transparency
                fillColor={`${location.color}33`} // Light blue color with 10% transparency
              />
            ))}

        </MapView>

        <Text
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            backgroundColor: 'white',
            padding: 10,
          }}>
          {message}
        </Text>
        <Button
          onPress={sendLocation}
          title="Reset Location"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};

export default Check;
