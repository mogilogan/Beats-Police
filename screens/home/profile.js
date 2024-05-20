import * as React from 'react';
import {View, Text, Image, Pressable, BackHandler, Alert} from 'react-native';

import {useDispatch} from 'react-redux';
import * as actionType from '../../constants/actionTypes';

import defaultp from '../assests/profile/profile.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PROFILE = ({navigation}) => {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState({});

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

  const Logout = () => {
    dispatch({type: actionType.LOGOUT});

    navigation.navigate('LoginPage');
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
    <View className="flex flex-col mt-9 w-full">
    <View className="w-full h-[50px]  bg-[#8b98d8] flex justify-center ">
      <Text className="font-extrabold text-3xl text-black ml-5">PROFILE</Text>
    </View>

    <View className="flex flex-row w-full h-[200px] bg-[#afb7e3]">
      <View className="w-[40%] flex justify-center items-end">
        <Image
          className=" w-[150px] h-[150px] "
          resizeMode="cover"
          source={defaultp}
        />
      </View>

      <View className="w-[60%] flex justify-center items-center">
        <View className="flex flex-col">
          <View className="flex flex-row">
            <Text className="text-white font-semibold text-md">
              Officer Id:
            </Text>
            <Text className="text-white font-semibold text-md">
              {user?.userData?.Officer_Id}
            </Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-white font-semibold text-md">
              Station Id:
            </Text>
            <Text className="text-white font-semibold text-md">
              {user?.userData?.Station_id}
            </Text>
          </View>
          <View className="flex flex-row">
            <Text className="text-white font-semibold text-md">Rank:</Text>
            <Text className="text-white font-semibold text-md">
              {user?.userData?.rank}
            </Text>
          </View>
        </View>
      </View>
    </View>
    <View className="flex justify-center items-center">
      <View className="flex flex-col justify-center items-center w-full pt-5 gap-5">
        <View className="w-[90%] bg-[#afb7e3] h-[50px] rounded-md justify-center ">
          <Pressable
            className="w-full h-full flex justify-center"
            onPress={() => {
              navigation.navigate('OfficerDetail');
            }}>
            <Text className="text-lg ml-4 font-semibold">About Officer</Text>
          </Pressable>
        </View>
        <View className="w-[90%] bg-[#afb7e3] h-[50px] rounded-md justify-center">
          <Pressable
            className="w-full h-full flex justify-center"
            onPress={() => {
              navigation.navigate('Directory');
            }}>
            <Text className="text-lg ml-4 font-semibold">
              Telephone Directory
            </Text>
          </Pressable>
        </View>
       
        <View   className="w-[90%] bg-[#afb7e3] h-[50px] rounded-md justify-center">
        <Pressable
            className="w-full h-full flex justify-center"
            onPress={Logout}>
          <Text className="text-lg ml-4 font-semibold">Logout</Text>
          </Pressable>
        </View>
       
        <View className="w-[90%] bg-[#afb7e3] h-[50px] rounded-md justify-center">
          <Text className="text-lg ml-4 font-semibold">Help</Text>
        </View>
      </View>
    </View>
  </View>

  );
};

export default PROFILE;
