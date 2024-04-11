import * as React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

import {useDispatch} from 'react-redux';

import {signin} from '../../actions/auth';

export function LOGINPAGE({navigation}) {
  const [officer, setOfficer] = React.useState('');
  const [passowrd, setPassword] = React.useState('');
  const dispatch = useDispatch();

  const handlelogin = async () => {
    const form = {officer_id: officer, password: passowrd};
    const mess = await dispatch(signin(form, navigation));
  };

  return (
    <SafeAreaView>
      <View className="flex flex-col">
        <Image
          className="w-full absolute h-[800]"
          resizeMode="cover"
          source={require('./Polics.png')}
        />
        <View className="bg-[#033ba6] opacity-50 w-full absolute h-screen" />

        <View className="border-2 border-black flex flex-col h-[100%] justify-center w-screen items-center ">
          <View className="w-[50%]">
            <TextInput
              placeholder="username"
              mode="outlined"
              onChangeText={newStatus => setOfficer(newStatus)}
            />
          </View>
          <View className="w-[50%] pt-10">
            <TextInput
              placeholder="Password"
              mode="outlined"
              onChangeText={newStatus => setPassword(newStatus)}
            />
          </View>
          <Button
            mode="contained"
            className="w-[50%] mt-10 bg-red-400"
            onPress={() => {
              handlelogin();
            }}
            onLongPress={() => {
              navigation.navigate('BeatDashBoard');
            }}>
            LOG IN
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LOGINPAGE;
