import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import { FilmDetails } from '../pages/FilmDetails';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    title: 'Lengoflix'
                }} />
            <Stack.Screen
                name='FilmDetails'
                component={FilmDetails}
                options={{
                    title: 'Detalhes'
                }} />
        </Stack.Navigator>
    );
}