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

export function DIRECTORY({navigation}) {
  return (
    <ScrollView className="">
      <View className="bg-slate-400 min-h-[100px] flex justify-center pl-5">
        <Text className="text-black text-xl font-bold">
          Telephone Directory
        </Text>
      </View>
      <ScrollView className="py-5 w-full px-5 flex gap-4">
        {/*temp */}
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
        {/*temp */}
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
        {/*temp */}
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
        {/*temp */}
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
        {/*temp */}
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
        {/*temp */}
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
      </ScrollView>
    </ScrollView>
  );
}

export default DIRECTORY;
