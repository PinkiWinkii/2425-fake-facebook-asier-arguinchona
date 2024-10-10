/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './components/Header';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import Home from './components/Home';
import Friends from './components/Friends';
import Groups from './components/Groups';
import Profile from './components/Profile';
import Notifications from './components/Notifications';
import Menu from './components/Menu';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message

const Tab = createMaterialTopTabNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const {width, height} = Dimensions.get('window');

  const backgroundStyle = {
    backgroundColor: 'black',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}
      ></StatusBar>

        <Header></Header>

        <NavigationContainer>
          <Tab.Navigator     
            screenOptions={({ route }) => ({
              swipeEnabled: true,
              tabBarShowLabel: false,
              tabBarShowIcon: true,
              tabBarActiveTintColor: '#3a86e9',
              tabBarInactiveTintColor: '#9F9F9F',

              tabBarIcon: ({ focused = true, color }) => {
                let iconName: string = 'Home';
                if (route.name === 'Home') iconName = 'home';
                else if (route.name === 'Friends') iconName = 'account-multiple-outline';
                else if (route.name === 'Groups') iconName = 'account-group';
                else if (route.name === 'Profile') iconName = 'account-circle-outline';
                else if (route.name === 'Notifications') iconName = 'bell-outline';
                else if (route.name === 'Menu') iconName = 'menu';
                return <MaterialCommunityIcons name={iconName} size={26} color={color}></MaterialCommunityIcons>;
              },
            })}
          >
          <Tab.Screen
            name="Home"
            component={Home}
            key="home" // Pass key explicitly here
          />
          <Tab.Screen
            name="Friends"
            component={Friends}
            key="friends" // Explicit key
          />
          <Tab.Screen
            name="Groups"
            component={Groups}
            key="groups" // Explicit key
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            key="profile" // Explicit key
          />
          <Tab.Screen
            name="Notifications"
            component={Notifications}
            key="notifications" // Explicit key
          />
          <Tab.Screen
            name="Menu"
            component={Menu}
            key="menu" // Explicit key
          />
          </Tab.Navigator>

        </NavigationContainer>



    </SafeAreaView>
  );
}


export default App;
