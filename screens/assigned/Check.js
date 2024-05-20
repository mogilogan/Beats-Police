import * as React from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  Button,
  BackHandler,
  Alert,
} from 'react-native';

import {connect, useDispatch, useSelector} from 'react-redux';


import AsyncStorage from '@react-native-async-storage/async-storage';
import {checkassign} from '../../actions/about';
import {useFocusEffect} from '@react-navigation/native';
import Check from './Tracker';



const CHECK = ({navigation}) => {
  const dispatch = useDispatch();
  const {checkData} = useSelector(state => state.check);

  const [socket, setSocket] = React.useState(null);
  const [error, setError] = React.useState('');
  const [userLocation, setUserLocation] = React.useState();
  const [user, setUser] = React.useState();

  const [dt, setDt] = React.useState(new Date().toLocaleString());

  React.useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const userString = await AsyncStorage.getItem('beatsauth');
          const user = JSON.parse(userString);
          if (user?.userData) {
            const formData = {Officer_Id: user.userData.Officer_Id};
            dispatch(checkassign(formData, setError));
            setUser(user);
          }
        } catch (error) {
          // Handle or log error
          console.error('Failed to fetch data:', error);
        }
      };

      fetchData();
      return () => {
        // Any cleanup would go here
      };
    }, [dispatch, navigation]),
  );

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
    <View className="flex-1  mt-9">
       {/* {checkData?.assigned_by !== null && (
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
            
          </View>
        )} */}
    
      <Check/>
     

    </View>
  );
};

export default CHECK;
