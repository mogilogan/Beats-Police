import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconButton, MD3Colors} from 'react-native-paper';
import HeaderBar from '../Components/HeaderBar';

export function HOMEDB({navigation}) {
  return (
    <View className="w-full flex flex-col justify-center">
      <View className="w-full">
        <View className="w-full h-[100px] bg-[#8b98d8] flex justify-center ">
          <Text className="font-extrabold text-3xl text-black ml-5">
            E-BEAT
          </Text>
        </View>
      </View>
      <View className="w-[100%]  h-[75px] flex flex-row  justify-around text-center  items-center bg-[#8b98d8]">
        <View className="  w-[50%] h-[100%] flex justify-center items-center">
          <Pressable
            className="w-full h-full justify-center items-center"
            onPress={() => {
              navigation.navigate('Tracking');
            }}>
            <Text className="text-black text-xl font-extrabold">Tracking</Text>
          </Pressable>
        </View>
        <View className="w-[50%] h-[100%] flex justify-center items-center bg-[#9ca7dd]">
          <View>
            <Text className="text-xl font-bold text-white">Dashboard</Text>
          </View>
        </View>
      </View>
      <View className="flex justify-center items-center w-full h-[500px] ">
        <View className="w-screen flex gap-10 justify-center items-center">
          <View className="w-[80%] flex justify-center items-center bg-[#9ca7dd] h-[100px] rounded-xl">
            <Pressable
              className="w-full h-full justify-center items-center"
              onPress={() => {
                navigation.navigate('SelectBeat');
              }}>
              <Text className="text-xl font-bold">Assign</Text>
            </Pressable>
          </View>
          <View className="w-[80%] flex justify-center items-center bg-[#9ca7dd] h-[100px] rounded-xl">
            <Pressable
              className="w-full h-full justify-center items-center"
              onPress={() => {
                navigation.navigate('ReportBeat');
              }}>
              <Text className="text-xl font-bold">Reports</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

export default HOMEDB;
