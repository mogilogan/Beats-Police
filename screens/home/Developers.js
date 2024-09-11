import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Linking} from 'react-native';

const team = [
  {
    name: 'Vishnou Prasad S',
    unit: 'Front-end Developer',
    batch: "PTU - ECE'25",
    linkedIn: 'https://www.linkedin.com/in/vishnou-prasad-21927b278/',
  },
  {
    name: 'Yuvarani VD',
    unit: 'Front-end Developer',
    batch: "PTU - ECE'25",
    linkedIn: 'https://www.linkedin.com/in/yuvarani-vd-503aa72b8/',
  },
  {
    name: 'Raajavardhini R',
    unit: 'Front-end Developer',
    batch: "PTU - ECE'25",
    linkedIn: 'https://www.linkedin.com/in/rajavardhini-r/',
  },
  {
    name: 'Praveen S',
    unit: 'UI/UX Designer',
    batch: "PTU - ECE'25",
    linkedIn: 'https://www.linkedin.com/in/praveen-saravanan-28613824a/',
  },
  {
    name: 'Rohit Vishal',
    unit: 'Database Handler',
    batch: "PTU - ECE'25",
    linkedIn: 'https://www.linkedin.com/in/rohit--vishal/',
  },
  {
    name: 'Vijayabharathi',
    unit: 'Database Handler',
    batch: "PTU - ECE'25",
    linkedIn: 'https://www.linkedin.com/in/vijay-bharathi-89239225a/',
  },
  {
    name: 'Gowtham Balaji R',
    unit: 'Back-end Developer',
    batch: "PTU - ECE'25",
    linkedIn: 'https://www.linkedin.com/in/gowtham-balaji-19996029b/',
  },
  {
    name: 'Mogi',
    unit: 'Back-end Developer',
    batch: "PTU - ECE'24",
    linkedIn: 'https://www.linkedin.com/in/mogiegan/',
  },
  {
    name: 'Shefaoudeen Z',
    unit: 'Back-end Developer',
    batch: "PTU - ECE'25",
    linkedIn: 'https://www.linkedin.com/in/shefaoudeen-z/',
  },
];

export function TEAM({navigation}) {
  return (
    <ScrollView className="">
      <View className="bg-slate-400 min-h-[100px] flex justify-center pl-5 pt-5">
        <Text className="text-black text-2xl font-bold">Developers</Text>
      </View>
      <ScrollView className="py-5 w-full px-5 flex gap-4">
        {/*Vishnou*/}
        {team.map((stud, index) => {
          return (
            <View
              key={index}
              className="bg-slate-200 rounded-xl py-5 px-5 flex flex-row justify-between items-center">
              <View>
                <Text className="text-black text-xl font-bold">
                  {stud.name}
                </Text>
                <View className="flex flex-row gap-3">
                  <Text className="text-black">{stud.unit}</Text>
                  <Text className="text-black">{stud.batch}</Text>
                </View>
              </View>
              <Pressable
                className="bg-blue-400 px-2 py-1 rounded-xl"
                onPress={() => Linking.openURL(`${stud.linkedIn}`)}>
                <Text className="text-white font-bold text-xl">in</Text>
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
}

export default TEAM;
