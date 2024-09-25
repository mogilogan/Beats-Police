import * as React from 'react';
import {View, Text, Pressable, BackHandler, Alert} from 'react-native';

import {useDispatch} from 'react-redux';
import * as actionType from '../../constants/actionTypes';

import AsyncStorage from '@react-native-async-storage/async-storage';

const HOME = ({navigation}) => {
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

export default HOME;
