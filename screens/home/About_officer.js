import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export function ABOUT_OFFICER({navigation}) {
  return (
    <ScrollView className="w-full flex flex-col">
      <View className="w-full h-[100px] bg-[#8b98d8] flex justify-center ">
        <Text className="font-extrabold text-3xl text-black ml-5">PROFILE</Text>
      </View>
      <View className="flex flex-col w-full justify-start items-center pt-10">
        <View className="min-h-[200px] w-[200px] bg-[#a1aad7] rounded-full"></View>
        <View className="w-full pt-10">
          <View className="font-bold w-[50%] flex flex-end items-end">
            <View>
              <Text className="font-bold text-xl">Name :</Text>
            </View>
            <View>
              <Text className="font-bold text-xl">ID :</Text>
            </View>
            <View>
              <Text className="font-bold text-xl">RANK :</Text>
            </View>
            <View>
              <Text className="font-bold text-xl">Date of Birth : </Text>
            </View>
            <View>
              <Text className="font-bold text-xl">Year of Joining : </Text>
            </View>
            <View>
              <Text className="font-bold text-xl">Address : </Text>
            </View>
            <View>
              <Text className="font-bold text-xl">Phone Number : </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ABOUT_OFFICER;
