import React, {useState, useEffect} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LOGINPAGE from '../screens/login/loginpage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TimeDisplay from '../screens/time/TimeDisplay';
import Home from './Home';

const Stack = createStackNavigator();

const Screens = () => {
  const navigation = useNavigation();
  const [dt, setDt] = useState(new Date().toLocaleString());
  useEffect(() => {
    const checkUser = async () => {
      const user = JSON.parse(await AsyncStorage.getItem('beatsauth'));
      console.log(user);
      if (!user) {
        navigation.navigate('LoginPage');
      }
    };

    checkUser();
  }, [navigation]);

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={LOGINPAGE}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: () => null}}
        />
      </Stack.Navigator>
      <TimeDisplay />
    </>
  );
};

export default Screens;
