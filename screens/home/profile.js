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
  );
};

export default PROFILE;
