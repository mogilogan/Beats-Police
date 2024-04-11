import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import {data} from './reportData';
import {ScrollView} from 'react-native-gesture-handler';

export function REPORTBEAT({navigation}) {
  return (
    <ScrollView className="w-full flex flex-col">
      <View className="w-full  h-[100px] bg-[#8b98d8] ">
        <Text className="text-3xl font-bold text-black  top-[47px] left-[50px]">
          E-BEAT
        </Text>
      </View>
      <View className="flex w-full justify-center items-center  pt-10">
        <View className="flex flex-row  justify-around items-center w-[50%] bg-[#b0b9e2] rounded-full h-[40px]">
          <View className="bg-[#9ca8e3] w-[50%] rounded-l-full h-[100%] flex justify-center items-center ">
            <Text className="text-white">Officers</Text>
          </View>
          <View className="bg-[#b3bded] w-[50%] rounded-r-full h-[100%] flex justify-center items-center">
            <Pressable
              className="w-full flex justify-center items-center h-full"
              onPress={() => {
                navigation.navigate('ReportDate');
              }}>
              <Text className="text-black">Past</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View className="w-full pt-5 flex justify-center items-center ">
        <View className="w-[90%] flex flex-row flex-wrap gap-4 ml-2 ">
          {data.map(report => {
            return (
              <View className=" w-[40%] bg-[#b3bded] rounded-2xl">
                <View className=" min-h-[100px] rounded-t-2xl"></View>
                <View className="bg-[#9ca8e3] rounded-b-2xl">
                  <Text className="text-center py-2 text-black font-semibold">
                    from {report.officer_name} - {report.officer_id}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

export default REPORTBEAT;
