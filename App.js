import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FilmDetails } from './src/pages/FilmDetails';
import { Home } from './src/pages/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='FilmDetails' component={FilmDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}