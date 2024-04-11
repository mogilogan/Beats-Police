import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import {Linking, Alert, Platform} from 'react-native';
import {contact} from './phone';

export function DIRECTORY({navigation}) {
  function callNumber(phone) {
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    } else {
      phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <ScrollView className="flex flex-col w-full">
      <View className="w-full h-[100px] bg-[#8b98d8] flex justify-center ">
        <Text className="font-extrabold text-3xl text-black ml-5">E-BEAT</Text>
      </View>

      <View className="flex  justify-center  items-center ">
        <TextInput
          className="bg-blue-200 rounded-3xl px-5 my-5 w-[60%] text-center"
          placeholder="Search Officer"
        />
      </View>

      <View className="w-full flex flex-col justify-center items-center">
        {contact.map(person => {
          return (
            <View className="border-b-2 border-[#8b98d8] flex flex-row w-[90%] py-2.5">
              <Pressable
                className="bg-blue-50 w-full h-full flex flex-row"
                onPress={() => callNumber(parseInt(person.phone_no))}>
                <View className="min-w-[20%] items-center min-h-[30px] bg-blue-400"></View>
                <View className="ml-5">
                  <Text className="text-blue-600 text-xl font-bold">
                    {person.name}
                  </Text>
                  <Text className="text-lg">{person.role}</Text>
                  <Text className="text-blue-400">{person.phone_no}</Text>
                </View>
              </Pressable>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default DIRECTORY;
