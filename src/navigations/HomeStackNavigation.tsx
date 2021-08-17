import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import FocusScreen from '../screens/FocusScreen';

export type HomeStackParamList = {
  Home: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

function HomeStackNavigation() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Focus" component={FocusScreen} />
    </HomeStack.Navigator>
   
  );
}

export default HomeStackNavigation;
