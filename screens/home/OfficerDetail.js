import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export function PhoneCard() {
  return (
    <View className="bg-slate-200 rounded-xl py-5 px-5 flex flex-row justify-between items-center">
      <View>
        <Text className="text-black text-xl font-bold">Officer Name</Text>
        <View className="flex flex-row gap-3">
          <Text className="text-black">Officer Rank</Text>
          <Text className="text-black">0123456789</Text>
        </View>
      </View>
      <Pressable className="bg-blue-400 px-4 py-2 rounded-xl">
        <Text className="text-white font-bold">Call</Text>
      </Pressable>
    </View>
  );
}

export function OFFICERDETAILS({navigation}) {
  return (
    <ScrollView className="">
      <View className="bg-slate-600 border-b-4 border-blue-500 min-h-[100px] flex justify-center pl-5">
        <Text className="text-xl font-bold text-white">About Officer</Text>
      </View>
      <ScrollView className="py-5 w-full px-4 flex mx-auto">
        <View className=" py-10 bg-slate-200 rounded-3xl flex px-5 items-center">
          <View className="min-w-[200px] min-h-[200px] rounded-xl bg-slate-300 mb-5"></View>
          <View className="flex flex-col justify-center gap-1">
            {/*Officer Name */}
            <View className=" flex flex-row">
              <Text className="text-lg font-bold text-black w-[35%]">
                Name :
              </Text>
              <Text className="font-normal text-lg  text-black">
                Shefaoudeen
              </Text>
            </View>
            {/*Officer ID */}
            <View className=" flex flex-row">
              <Text className="text-lg font-bold text-black w-[35%]">
                Officer ID :
              </Text>
              <Text className="font-normal text-lg  text-black">PY_123</Text>
            </View>
            {/*Officer Rank */}
            <View className=" flex flex-row">
              <Text className="text-lg font-bold text-black w-[35%]">
                Officer Rank :
              </Text>
              <Text className="font-normal text-lg  text-black">SHO</Text>
            </View>
            {/*Phone no.*/}
            <View className=" flex flex-row">
              <Text className="text-lg font-bold text-black w-[35%]">
                Phone no. :
              </Text>
              <Text className="font-normal text-lg  text-black">
                1234567890
              </Text>
            </View>
            {/*Officer Name */}
            <View className=" flex flex-row">
              <Text className="text-lg font-bold text-black w-[35%]">
                Address :
              </Text>
              <Text className="font-normal text-lg  text-black">
                Villianur,Pondicherry - 605110
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

export default OFFICERDETAILS;
