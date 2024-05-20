import {useEffect, useState} from 'react';

import HOMEDB from '../screens/home/dashboard';
import SELECTBEAT from '../screens/assign/selectbeat';

import REPORTBEAT from '../screens/reports/reportbeat';
import PROFILE from '../screens/home/profile';
import DIRECTORY from '../screens/home/directory';
import ABOUT from '../screens/home/About';

import TRACKING from '../screens/tracking/tracking';
import CHECK from '../screens/assigned/Check';
import Material from 'react-native-vector-icons/MaterialIcons';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TopNav = () => {
  return (
    <TopTab.Navigator  screenOptions={{
        
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'powderblue', paddingTop: 35, },
      }}>
      <TopTab.Screen
        name="Home"
        options={{ tabBarLabel: 'Home' }}
        children={() => (
          <SettingsStack.Navigator>
            <SettingsStack.Screen
              name="dashBoard"
              component={HOMEDB}
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
      />
      <TopTab.Screen options={{ tabBarLabel: 'Tracking' }} name="Settings" component={TRACKING} />
    </TopTab.Navigator>
  );
};

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
              component={TopNav}
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

export default Home;
