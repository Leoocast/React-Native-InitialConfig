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
      headerShown: false,
      tabBarActiveTintColor: '#4ba2b1',
      tabBarInactiveTintColor: '#99A9BB',
      tabBarStyle: {
        elevation: 0,
        height: 60,
        backgroundColor: '#0b2e3b',
        borderTopWidth: 0
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontFamily: 'ApercuPro-Bold',
        paddingBottom: 5,
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
