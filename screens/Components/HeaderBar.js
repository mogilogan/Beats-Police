import React from 'react';
import {StyleSheet, View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconButton, MD3Colors} from 'react-native-paper';

const HeaderBar = ({navigation}) => {
  return (
    <View className="w-full">
      <View className="w-full h-[100px] bg-[#8b98d8] flex justify-center ">
        <Text className="font-extrabold text-3xl text-black ml-5">E-BEAT</Text>

        <IconButton
          icon="home"
          className="absolute scale-150 bg-[#8899eb] right-5 shadow-black border-2 border-gray-400"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </View>
  );
};

export default HeaderBar;
