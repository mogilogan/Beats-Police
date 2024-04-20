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

import PREVIOUS from './screens/reports/previous';
import SELECT from './screens/assign/select';
import TRACKING from './screens/tracking/tracking';
import DASHBOARD from './screens/beatscreens/home/beatdashboard';
import BEATBOOK from './screens/beatscreens/home/beatbook';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Icon from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';

import TimeDisplay from './screens/time/TimeDisplay';
import CHECK from './screens/assigned/Check';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();

function Home({}) {
  const [users, setUser] = useState(3);
  useEffect(() => {
    const checkUser = async () => {
      const user = JSON.parse(await AsyncStorage.getItem('beatsauth'));
      setUser(user?.userData?.rank);
    };

    checkUser();
  }, []);
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
          } else if (route.name === 'Live') {
            iconName = 'person';
            color = '#fff50';
          }

          // You can return any component that you like here!
          return <Material name={iconName} size={30} color="#900" />;
        },
        headerShown: false,
      })}>
      {
        {
          1: (
            <Tab.Screen
              name="DashBoard"
              children={() => (
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
                    name="ReportBeat"
                    component={REPORTBEAT}
                    options={{header: () => null}}
                  />
                  <SettingsStack.Screen
                    name="SelectBeat"
                    component={SELECTBEAT}
                    options={{header: () => null}}
                  />
                </SettingsStack.Navigator>
              )}
              options={{header: () => null}}
            />
          ),
          0: (
            <Tab.Screen name="Live" options={{header: () => null}}>
              {() => (
                <SettingsStack.Navigator>
                  <SettingsStack.Screen
                    name="Check"
                    component={CHECK}
                    options={{header: () => null}}
                  />
                </SettingsStack.Navigator>
              )}
            </Tab.Screen>
          ),
        }[users]
      }
      <Tab.Screen name="Profile" options={{header: () => null}}>
        {() => (
          <SettingsStack.Navigator>
            <SettingsStack.Screen
              name="profile"
              component={PROFILE}
              options={{header: () => null}}
            />
            <SettingsStack.Screen name="Directory" component={DIRECTORY} />
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
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default Screens;
