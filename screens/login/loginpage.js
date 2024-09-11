import * as React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {signin} from '../../actions/auth';
import {useFocusEffect} from '@react-navigation/native';

export function LOGINPAGE({navigation}) {
  const [officer, setOfficer] = React.useState('');
  const [passowrd, setPassword] = React.useState('');
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      const checkUser = async () => {
        const user = JSON.parse(await AsyncStorage.getItem('beatsauth'));
        console.log(user);
        if (user) {
          navigation.navigate('Home');
        }
      };

      checkUser();

      return () => {
        // Optional cleanup can go here
      };
    }, [navigation]),
  );

  const handlelogin = async () => {
    const form = {officer_id: officer, password: passowrd};
    const mess = await dispatch(signin(form, navigation));
  };

  return (
    <View className="flex flex-1 justify-end items-center h-screen w-screen ">
      <Image
        className="w-screen h-screen absolute"
        resizeMode="cover"
        source={require('./Polics.png')}
      />

      <View className="w-screen bg-blue-800/75 absolute h-screen" />
      <View className="flex justify-center items-center scale-50 z-50  ">
        <Image source={require('./pp-logo.png')} />
      </View>
      <View className="w-screen flex justify-center items-center">
        <TextInput
          placeholder="Username"
          className="bg-slate-300 w-[60%]"
          mode="outlined"
          onChangeText={newStatus => setOfficer(newStatus)}
        />
      </View>
      <View className="w-screen flex justify-center items-center py-10">
        <TextInput
          placeholder="Password"
          className="bg-slate-300 w-[60%]"
          secureTextEntry={true}
          mode="outlined"
          onChangeText={newStatus => setPassword(newStatus)}
        />
      </View>
      <Button
        mode="contained"
        className="bg-red-500 mb-20"
        onPress={() => {
          handlelogin();
        }}
        onLongPress={() => {
          navigation.navigate('BeatDashBoard');
        }}>
        LOG IN
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  componentLayout: {
    height: 50,
    left: '50%',
  },
  logItem: {
    backgroundColor: '#033ba6',
    opacity: 0.5,
  },
  logInTypo: {
    textAlign: 'left',
    fontFamily: 'Roboto',
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: 15,
    position: 'absolute',
  },
  logInPageItemBorder: {
    borderStyle: 'solid',
    borderRadius: 50,
    position: 'absolute',
  },
  rectangleViewPosition: {
    height: 25,
    backgroundColor: '#d9d9d9',
    width: 360,
    left: '50%',
    marginLeft: -180,
    position: 'absolute',
  },
  logInPageChild: {
    marginTop: -400,
    top: '50%',
    width: 360,
    marginLeft: -180,
    position: 'absolute',
    left: '50%',
    height: 800,
  },
  username: {
    top: '32%',
    left: '10.8%',
    color: '#000',
  },
  component3Child: {
    top: '0%',
    right: '0%',
    bottom: '0%',
    left: '0%',
    width: '100%',
    backgroundColor: '#fff',
    opacity: 0.8,
  },
  component4: {
    top: 441,
    width: 250,
    marginLeft: -125,
    height: 50,
    position: 'absolute',
  },
  logInPageItem: {
    marginLeft: -50,
    top: 662,
    backgroundColor: 'rgba(199, 86, 86, 0.5)',
    borderColor: '#fff',
    borderWidth: 1,
    width: 100,
    height: 50,
    left: '50%',
  },
  component3: {
    top: 364,
    width: 250,
    marginLeft: -125,
    height: 50,
    position: 'absolute',
  },
  logIn: {
    marginLeft: -25,
    top: 678,
    color: '#fff',
    left: '50%',
    fontFamily: 'Roboto',
    lineHeight: 17,
    letterSpacing: 0.9,
    fontSize: 15,
  },
  logInPageInner: {
    top: 0,
  },
  rectangleView: {
    bottom: 0,
  },
  logInPage: {
    backgroundColor: '#3a62ae',
    flex: 1,
    overflow: 'hidden',
    height: 800,
    width: '100%',
  },
});

export default LOGINPAGE;
