import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

import HomeStackNavigation from './HomeStackNavigation';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator 
    screenOptions={{
     tabBarActiveTintColor: '#03BFB6',
     tabBarInactiveTintColor: '#99A9BB',
     tabBarStyle: {
       elevation: 0,
       height: 72,
     },
     tabBarLabelStyle: {
       fontSize: 12,
       margin: 0,
       fontFamily: 'ApercuPro-Bold',
       paddingBottom: 8,
     },
   }}>
      <Tab.Screen name="Home" component={HomeStackNavigation} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;