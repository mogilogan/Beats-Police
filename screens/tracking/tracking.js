//HomeTracking
import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
} from 'react-native';

export function TRACKING({navigation}) {
  return (
    <View className="w-full flex flex-col justify-center">
      <View className="w-full h-[100px] bg-[#8b98d8] flex justify-center ">
        <Text className="font-extrabold text-3xl text-black ml-5">E-BEAT</Text>
      </View>
      <View className="w-[100%]  h-[75px] flex flex-row  justify-around text-center  items-center bg-[#8b98d8]">
        <View className="  w-[50%] h-[100%] flex justify-center items-center bg-[#9ca7dd]">
          <Pressable className="">
            <Text className="text-xl font-extrabold text-white">Tracking</Text>
          </Pressable>
        </View>
        <View className="w-[50%] h-[100%] flex justify-center items-center ">
          <View className="w-full h-full justify-center items-center">
            <Pressable
              className="w-full h-full justify-center items-center"
              onPress={() => {
                navigation.navigate('dashBoard');
              }}>
              <Text className="text-black text-xl font-bold ">Dashboard</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View className="flex  justify-center  items-center ">
        <TextInput
          className="bg-blue-200 rounded-3xl px-5 my-5 w-[60%] text-center"
          placeholder="Search Officer"></TextInput>
      </View>
    </View>
  );
}

export default TRACKING;
