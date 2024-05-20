import * as React from 'react';
import {View, Text, PermissionsAndroid, Button, BackHandler, Alert} from 'react-native';

import {connect, useDispatch, useSelector} from 'react-redux';
import MapView, {Circle, Marker} from 'react-native-maps';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {checkassign} from '../../actions/about';
import {useFocusEffect} from '@react-navigation/native';

import Geolocation from '@react-native-community/geolocation';
import io from 'socket.io-client';

const Check = ({navigation}) => {
  const dispatch = useDispatch();
  const {checkData} = useSelector(state => state.check);

  const [socket, setSocket] = React.useState(null);
  const [error, setError] = React.useState('');
  const [userLocation, setUserLocation] = React.useState();
  const [user,setUser] = React.useState(); 
  const coordinate = {latitude: 11.924047982381875, longitude: 79.8196753};
  const radius = 350;

  const initializeSocket =()=>{
     // Initialize the socket connection
     const newSocket = io('http://10.0.2.2:8000');
     setSocket(newSocket);
 
     return () => {
       // Disconnect the socket connection when the component unmounts
       if (socket) {
         socket.disconnect();
       }
     };
  }

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


  const sendLocation = ()=>{
// Send location data to the backend server when the user's location changes
const workerId = user?.userData?.Officer_Id

if (socket && userLocation) {
  const { latitude, longitude } = userLocation;
  const data = {"latitude": latitude, "longitude":longitude,"workerId":workerId }
  socket.emit('workerLocation', data);
  console.log('Sent worker location:', { latitude, longitude, workerId });
}
  }

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const userString = await AsyncStorage.getItem('beatsauth');
          const user = JSON.parse(userString);
          if (user?.userData) {
            const formData = { Officer_Id: user.userData.Officer_Id };
            dispatch(checkassign(formData, setError));
            setUser(user);
          }
        } catch (error) {
          // Handle or log error
          console.error("Failed to fetch data:", error);
        }
      };

    
fetchData();
      return () => {
        // Any cleanup would go here
      };
    }, [dispatch, navigation])
  );

  useFocusEffect(
    React.useCallback(() => {
      const watchId = Geolocation.watchPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setUserLocation({latitude, longitude});
          console.log(latitude + ' ' + longitude);
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
    initializeSocket();
    requestLocationPermission();

  }, []);

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


  return (
    <View className="flex-1  ">

      {/* {checkData?.start_time } */}
      <Text className="pt-5 pl-2">#E-BEAT-PROFILE</Text>
      <View className="items-center justify-center  gap-6">
        {checkData?.assigned_by !== null && (
          <View className="flex flex-col">
            <View className="flex flex-row">
              <Text>Beat: </Text>
              <Text>{checkData?.beat}</Text>
            </View>
            <View className="flex flex-row">
              <Text>hamplets: </Text>
              <Text>{checkData?.hamplets}</Text>
            </View>
            <View className="flex flex-row">
              <Text>Start Time: </Text>
              <Text>{checkData?.start_time}</Text>
            </View>
            <View className="flex flex-row">
              <Text>End Time: </Text>
              <Text>{checkData?.end_time}</Text>
            </View>
            <View className="flex flex-row">
              <Text>Assigned_by: </Text>
              <Text>{checkData?.assigned_by}</Text>
            </View>
            <View className="flex flex-row">
              <Text>Coorodinates: </Text>
              <Text>{userLocation?.latitude}</Text>
            </View>
          </View>
        )}

        <MapView
          className=" w-full min-h-[400px]"
          initialRegion={{
            ...coordinate,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Circle
            center={coordinate}
            radius={radius}
            strokeColor="rgba(0, 0, 255, 0.5)" // Blue color with 50% transparency
            fillColor="rgba(0, 0, 255, 0.1)" // Light blue color with 10% transparency
          />
          {userLocation && <Marker coordinate={userLocation} />}
        </MapView>
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
