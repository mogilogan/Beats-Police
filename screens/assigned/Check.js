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
import {beatassigned} from '../../actions/about';
import {useFocusEffect} from '@react-navigation/native';
import Check from './Tracker';
import io from 'socket.io-client';



const CHECK = ({navigation}) => {
  const dispatch = useDispatch();
  const {checkData} = useSelector(state => state.beat);
  const [isTimeValid, setIsTimeValid] = React.useState(false);
  const [socket, setSocket] = React.useState(null);


  const [user, setUser] = React.useState();
  const [dt, setDt] = React.useState(new Date().toLocaleString());
  


   // Initialize the socket connection
   const initializeSocket = () => {
    const newSocket = io('http://10.0.2.2:8000');
    setSocket(newSocket);

    return () => {
      // Disconnect the socket connection when the component unmounts
    
        newSocket.disconnect();
    
    };
  };


  React.useEffect(() => {
    initializeSocket();
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(secTimer);

  }, []);


  useFocusEffect(
    React.useCallback(() => {
      
      fetchData();
      return () => {
        // Any cleanup would go here
      };
    }, [dispatch, navigation]),
  );

  const fetchData = async () => {
    try {
      const userString = await AsyncStorage.getItem('beatsauth');
      const user = JSON.parse(userString);
 
      if (user?.userData) {
        const formData = {officer_id: user.userData.Officer_Id};
        dispatch(beatassigned(formData));
        setUser(user);
      }
    } catch (error) {
      // Handle or log error
      console.error('Failed to fetch data:', error);
    }
  };

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



  React.useEffect(() => {
    const checkTimeInterval = () => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      // Define time intervals
      const intervals = {
        1: { start: 8, end: 16 },  // 8am to 4pm
        2: { start: 16, end: 24 }, // 4pm to 12am
        3: { start: 0, end: 8 },   // 12am to 8am
      };

      if (checkData?.time) {
        const interval = intervals[checkData.time];
        const withinInterval = (currentHour >= interval.start && currentHour < interval.end);
        setIsTimeValid(withinInterval);
      }else{
        socket.disconnect();
      }
    };

    // Check time on component mount
    checkTimeInterval();

    // Set interval to check time periodically
    const intervalId = setInterval(checkTimeInterval, 60000); // Check every minute

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [checkData]);

  return (
    <View className="flex-1  mt-9">
{isTimeValid ? 
    
      <Check user={user} beat={checkData.beat} time={checkData.time} socket={socket}/> :

      <Text>Not Assigned!</Text>
     
}
    </View>
  );
};

export default CHECK;
