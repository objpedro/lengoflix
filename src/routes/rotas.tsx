import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import { MoviesDetails } from '../pages/MoviesDetails';
import { SeriesDetails } from '../pages/SeriesDetails';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    title: 'Lengoflix',
                    headerShown: false,
                }} />
            <Stack.Screen
                name='MoviesDetails'
                component={MoviesDetails}
                options={{
                    title: 'Detalhes do Filme',
                    headerShown: false,
                }} />
            <Stack.Screen
                name='SeriesDetails'
                component={SeriesDetails}
                options={{
                    title: 'Detalhes da Serie',
                    headerShown: false,
                }} />
        </Stack.Navigator>
    );
}