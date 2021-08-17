import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamList } from '../navigations/HomeStackNavigation';

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const FocusScreen = ({ navigation: { navigate } }: HomeScreenProps) => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.container}>
            <Text style={styles.font}>Home Screen</Text>
        </View>
    </ScrollView>
  );
};

export default FocusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#374e80',
    padding: 5
  },
  font: {
    color: '#e4e0e0',
  }
})