import * as React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Linking, Platform} from 'react-native';

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
  const dialCall = number => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  const phoneList = [
    {
      name: 'L.V. Senthil Kumar',
      ramk: 'SHO',
      number: '+919789442211',
    },
    {
      name: 'E. Prabu',
      ramk: 'SI',
      number: '+919677685676',
    },
    {
      name: 'N. Backthavatchalam',
      ramk: 'SI',
      number: '+919442067091',
    },
    {
      name: 'G. Anbarasan',
      ramk: 'SGSI',
      number: '+919944728100',
    },
    {
      name: 'S. Divianadane Francois',
      ramk: 'SGSI',
      number: '+919940882456',
    },
    {
      name: 'G. Ramesh',
      ramk: 'SGSI',
      number: '+919486747296',
    },
    {
      name: 'E.Suresh Kumar',
      ramk: 'SGSI',
      number: '+917358996618',
    },
    {
      name: 'S. Saravanane',
      ramk: 'SGSI',
      number: '+919943402845',
    },
    {
      name: 'K. Anandakumar',
      ramk: 'SGASI',
      number: '+919443564400',
    },
    {
      name: 'S. Balamourougane',
      ramk: 'SGASI',
      number: '+919944183584',
    },
    {
      name: 'C. Ilango',
      ramk: 'SGASI',
      number: '+919345462531',
    },
    {
      name: 'K.Vaithianathan',
      ramk: 'SGASI',
      number: '+919626880789',
    },
    {
      name: 'S. Babu',
      ramk: 'SGASI',
      number: '+919003967746',
    },
    {
      name: 'S. Govindaradjou',
      ramk: 'SGASI',
      number: '+919894881053',
    },
    {
      name: 'R. Balachandar',
      ramk: 'SGASI',
      number: '+919994653056',
    },
    {
      name: 'Stephen',
      ramk: 'SGHC',
      number: '+918190006543',
    },
    {
      name: 'Rajagopal',
      ramk: 'SGHC',
      number: '+919655707727',
    },
    {
      name: 'R. Sankar',
      ramk: 'SGHC',
      number: '+919600770112',
    },
    {
      name: 'M. Mouraly',
      ramk: 'SGHC',
      number: '+919943255434',
    },
    {
      name: 'Manivannan',
      ramk: 'SGHC',
      number: '+919600360021',
    },
    {
      name: 'S. Palanisamy',
      ramk: 'SGHC',
      number: '+919360035467',
    },
    {
      name: 'B. Manimaran',
      ramk: 'SGHC',
      number: '+919943540321',
    },
    {
      name: 'Prabu',
      ramk: 'SGHC',
      number: '+919785863409',
    },
    {
      name: 'I. Neelakandan',
      ramk: 'SGHC',
      number: '+919750224223',
    },
    {
      name: 'M. Manikandan',
      ramk: 'SGHC',
      number: '+919585447951',
    },
    {
      name: 'N. Veeramani',
      ramk: 'SGHC',
      number: '+919789629868',
    },
    {
      name: 'T. Siranjivy',
      ramk: 'SGHC',
      number: '+917339050885',
    },
    {
      name: 'K.Arjunan',
      ramk: 'SGHC',
      number: '+919790049944',
    },
    {
      name: 'S. Kadalarasan',
      ramk: 'SGHC',
      number: '+919940902994',
    },
    {
      name: 'Sundar',
      ramk: 'SGHC',
      number: '+919003873114',
    },
    {
      name: 'E. Karunakaran',
      ramk: 'SGHC',
      number: '+919790098484',
    },
    {
      name: 'V. Rajasekar',
      ramk: 'SGHC',
      number: '+919626878860',
    },
    {
      name: 'S. Sivasankar',
      ramk: 'SGHC',
      number: '+919443380859',
    },
    {
      name: 'M. Poovan',
      ramk: 'SGHC',
      number: '+919944419512',
    },
    {
      name: 'R. Purushoth',
      ramk: 'PC',
      number: '+919843971618',
    },
    {
      name: 'V. Murugan',
      ramk: 'PC',
      number: '+919751760760',
    },
    {
      name: 'Balaji Viswanath. R',
      ramk: 'PC',
      number: '+919952104482',
    },
    {
      name: 'Mohan',
      ramk: 'PC',
      number: '+919894665505',
    },
    {
      name: 'D. Prabakar',
      ramk: 'PC',
      number: '+919043681320',
    },
    {
      name: 'A. Francis',
      ramk: 'PC',
      number: '+917904011990',
    },
    {
      name: 'Sanjeevagandhi',
      ramk: 'PC',
      number: '+919791897389',
    },
    {
      name: 'Manikandan',
      ramk: 'PC',
      number: '+919677417704',
    },
    {
      name: 'P. Padmavathi',
      ramk: 'WPC',
      number: '+917598414762',
    },
  ];

  return (
    <ScrollView className="">
      <View className="bg-slate-400 min-h-[100px] flex justify-center pl-5 pt-5">
        <Text className="text-black text-2xl font-bold">
          Telephone Directory
        </Text>
      </View>
      <ScrollView className="py-5 w-full px-5 flex gap-4 mx-auto">
        {/*temp */}

        {phoneList.map((ele, ind) => {
          return (
            <View
              className="bg-slate-200 rounded-xl py-5 px-5 flex flex-row justify-between items-center"
              key={ind}>
              <View>
                <Text className="text-black text-xl font-bold">{ele.name}</Text>
                <View className="flex flex-row gap-3">
                  <Text className="text-black">{ele.ramk}</Text>
                  <Text className="text-black">{ele.number}</Text>
                </View>
              </View>
              <Pressable
                className="bg-blue-400 px-4 py-2 rounded-xl"
                onPress={() => dialCall(ele.number)}>
                <Text className="text-white font-bold">Call</Text>
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
}

export default DIRECTORY;
