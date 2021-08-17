import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../navigations/HomeStackNavigation';

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({ navigation: { navigate } }: HomeScreenProps) => {

  return (
    <ScrollView>
        <View>
            <Text>Home Screen</Text>
        </View>
    </ScrollView>
  );
};

export default HomeScreen;
