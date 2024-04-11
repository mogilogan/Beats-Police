import * as React from 'react';
import {View, Text, Image, Pressable} from 'react-native';

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

  return (
    <View className="flex flex-col w-full">
      <View className="w-full h-[100px] bg-[#8b98d8] flex justify-center ">
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
          <View className="w-[90%] bg-[#afb7e3] h-[50px] rounded-md justify-center">
            <Text className="text-lg ml-4 font-semibold">Settings</Text>
          </View>
          <View className="w-[90%] bg-[#afb7e3] h-[50px] rounded-md justify-center">
            <Text className="text-lg ml-4 font-semibold">Help</Text>
          </View>
        </View>
      </View>
    </View>

    /*
    <View className="flex-1  ">
    <Text className="pt-10 pl-2">#E-BEAT-PROFILE</Text>
    <View className="items-center justify-center flex flex-row gap-6">
    <Image
    className=" w-[150px] h-[150px]"
          resizeMode="cover"
          source={defaultp}
          />
          <View className="flex flex-col">
          <View className="flex flex-row">
          <Text>Officer Id:</Text>
          <Text>{user?.userData?.Officer_Id}</Text>
          </View>
          <View className="flex flex-row">
          <Text>Station Id:</Text>
          <Text>{user?.userData?.Station_id}</Text>
          </View>
          <View className="flex flex-row">
          <Text>Rank:</Text>
          <Text>{user?.userData?.rank}</Text>
          </View>
          </View>
          </View>
          
          <Pressable onPress={() => {}} />
          <View className="py-6">
          <Text
          className="bg-red-500 py-4 text-center"
          onPress={() => {
            navigation.navigate('About');
          }}>
          About officer
          </Text>
          <Text
          className="bg-green-500 py-4 text-center"
          onPress={() => {
            navigation.navigate('Directory');
          }}>
          Telephone Directory
          </Text>
          <Text
          onPress={() => {
            Logout();
          }}
          className="bg-blue-500 py-4 text-center">
          Log-Out
          </Text>
          <Text className="bg-yellow-500 py-4 text-center">Help</Text>
          </View>
          </View>
        */
  );
};

export default PROFILE;
