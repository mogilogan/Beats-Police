import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable, BackHandler } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from "react-redux";

import {fetchall} from '../../actions/report'
import { useFocusEffect } from "@react-navigation/native";

export function REPORTBEAT({ navigation }) {

  const dispatch = useDispatch();
  const [user, setUser] = React.useState({});

  const {reportData} = useSelector(state => state.report);


  React.useEffect(() => {
    const fetchData = async () => {
      const userData = await AsyncStorage.getItem('beatsauth');

      if (userData) {
        setUser(JSON.parse(userData));
      } else {
        navigation.navigate('LoginPage');
      }
    };

    fetchData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchreport();
      return () => {
        // Any cleanup would go here
      };
    }, [dispatch, navigation]),
  );


  const fetchreport = async () => {
    try {
      console.log('ok');
      await dispatch(fetchall());
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

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
  
    return `${hrs}h ${mins}m ${secs}s`;
  };
  return (
    <View >

<View className="flex flex-row gap-4 border">
      <Text className="text-2xl ">Id</Text>
      <Text className="text-2xl ">beat</Text>
      <Text className="text-2xl ">Officer Id</Text>
      <Text className="text-2xl ">Time Spent</Text>
    
  </View>  
      

      {reportData != undefined ?
      <>{reportData?.map((report,idx)=>(

<View className="flex flex-row gap-4 border">
      <Text className="text-2xl ">{report.id}</Text>
      <Text className="text-2xl ">{report.beat}</Text>
      <Text className="text-2xl ">{report.officer_id}</Text>
      <Text className="text-2xl ">{formatTime(report.time)}</Text>
    
  </View>  
    ))}</>
      :<Text>Not</Text>}
     
     
     
     
    </View>
  );
}



export default REPORTBEAT;
