import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { MoviesDetails } from '../pages/MoviesDetails';
import { SeriesDetails } from '../pages/SeriesDetails';
import { EpisodesDetails } from '../pages/EpisodesDetails';
import LoginScreen from '../pages/Login/LoginScreen';
import StartScreen from '../pages/Start';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <>
      <Stack.Navigator initialRouteName={'Start'}>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{
            title: 'Lengoflix',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Lengoflix',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Lengoflix',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MoviesDetails"
          component={MoviesDetails}
          options={{
            title: 'Detalhes do Filme',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SeriesDetails"
          component={SeriesDetails}
          options={{
            title: 'Detalhes da Serie',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EpisodesDetails"
          component={EpisodesDetails}
          options={{
            title: 'Detalhes do Episódio',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
}
