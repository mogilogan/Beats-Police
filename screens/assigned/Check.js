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



const CHECK = ({navigation}) => {
  const dispatch = useDispatch();
  const {checkData} = useSelector(state => state.beat);



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

  return (
    <View className="flex-1  mt-9">
{checkData != null || undefined ?
    
      <Check user={user} beat={checkData.beat} time={checkData.time} /> :

      <Text>Loading</Text>
     
}
    </View>
  );
};

export default CHECK;
