import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LOGINPAGE from './screens/login/loginpage';
import HOMEDB from './screens/home/dashboard';
import SELECTBEAT from './screens/assign/selectbeat';
import VIEWBEAT from './screens/view/viewbeat';
import REPORTBEAT from './screens/reports/reportbeat';
import PROFILE from './screens/home/profile';
import DIRECTORY from './screens/home/directory';
import ABOUT from './screens/home/About';
import WELCOME from './screens/login/welcome';

import VIEWDETAILS from './screens/view/viewdetails';
import PREVIOUS from './screens/reports/previous';
import SELECT from './screens/assign/select';
import TRACKING from './screens/tracking/tracking';
import DASHBOARD from './screens/beatscreens/home/beatdashboard';
import BEATBOOK from './screens/beatscreens/home/beatbook';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';
import {View} from 'react-native';
import ABOUT_OFFICER from './screens/home/About_officer';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName;
          let color;

          if (route.name === 'DashBoard') {
            iconName = 'dashboard';
            color = '#900';
          } else if (route.name === 'Profile') {
            iconName = 'person';
            color = '#fff54';
          }

          // You can return any component that you like here!
          return <Material name={iconName} size={30} color="#900" />;
        },
        headerShown: false,
      })}>
      <Tab.Screen name="DashBoard" options={{header: () => null}}>
        {() => (
          <SettingsStack.Navigator>
            <SettingsStack.Screen
              name="dashBoard"
              component={HOMEDB}
              options={{header: () => null}}
            />
            <SettingsStack.Screen
              name="Tracking"
              component={TRACKING}
              options={{header: () => null}}
            />
            <SettingsStack.Screen
              name="ViewBeat"
              component={VIEWBEAT}
              options={{header: () => null}}
            />
            <SettingsStack.Screen
              name="ReportBeat"
              component={REPORTBEAT}
              options={{header: () => null}}
            />
            <SettingsStack.Screen
              name="ReportDate"
              component={PREVIOUS}
              options={{header: () => null}}
            />
            <SettingsStack.Screen
              name="SelectBeat"
              component={SELECTBEAT}
              options={{header: () => null}}
            />
          </SettingsStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Profile" options={{header: () => null}} className="">
        {() => (
          <SettingsStack.Navigator>
            <SettingsStack.Screen
              name="profile"
              component={PROFILE}
              options={{header: () => null}}
            />
            <SettingsStack.Screen
              name="Directory"
              component={DIRECTORY}
              options={{header: () => null}}
            />
            <Stack.Screen
              name="OfficerDetail"
              component={ABOUT_OFFICER}
              options={{header: () => null}}
            />

            <Stack.Screen name="About" component={ABOUT} />
          </SettingsStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const Screens = ({navigation}) => {
  const [dt, setDt] = useState(new Date().toLocaleString());
  useEffect(() => {
    const checkUser = async () => {
      const user = JSON.parse(await AsyncStorage.getItem('beatsauth'));
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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#0F4210',
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="LoginPage"
          component={LOGINPAGE}
          options={{header: () => null}}
        />

        <Stack.Screen
          name="SelectBeat"
          component={SELECTBEAT}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
