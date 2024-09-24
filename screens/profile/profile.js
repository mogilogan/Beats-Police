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
      <View className="w-full h-[50px]  bg-[#404e5a] flex justify-center ">
        <Text className="font-bold text-xl text-white ml-5">PROFILE</Text>
      </View>

      <View className="flex flex-row w-full h-[200px] bg-[#e7f1fd]">
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
              <Text className="text-black font-semibold text-lg">
                Officer ID :
              </Text>
              <Text className="text-black font-semibold text-lg">
                {user?.userData?.Officer_Id}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-black font-semibold text-lg">
                Station ID :
              </Text>
              <Text className="text-black font-semibold text-lg">
                {user?.userData?.Station_id}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-black font-semibold text-lg">Rank:</Text>
              <Text className="text-black font-semibold text-lg">
                {user?.userData?.rank}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View className="flex justify-center items-center">
        <View className="flex flex-col justify-center items-center w-full pt-5 gap-5">
          <View className="w-[90%] bg-blue-400 h-[50px] rounded-md justify-center ">
            <Pressable
              className="w-full h-full flex justify-center"
              onPress={() => {
                navigation.navigate('about');
              }}>
              <Text className="text-lg text-white ml-4 font-semibold">
                About Officer
              </Text>
            </Pressable>
          </View>
          <View className="w-[90%] bg-blue-400 h-[50px] rounded-md justify-center">
            <Pressable
              className="w-full h-full flex justify-center"
              onPress={() => {
                navigation.navigate('Directory');
              }}>
              <Text className="text-lg text-white ml-4 font-semibold">
                Telephone Directory
              </Text>
            </Pressable>
          </View>

          <View className="w-[90%] bg-blue-400 h-[50px] rounded-md justify-center">
            <Pressable
              className="w-full h-full flex justify-center"
              onPress={() => {
                navigation.navigate('Team');
              }}>
              <Text className="text-lg text-white ml-4 font-semibold">
                Developers
              </Text>
            </Pressable>
          </View>

          <View className="w-[90%] bg-red-400  h-[50px] rounded-md justify-center">
            <Pressable
              className="w-full h-full flex justify-center"
              onPress={Logout}>
              <Text className="text-lg text-white ml-4 font-semibold">
                Logout
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PROFILE;
