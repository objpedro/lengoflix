import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';
import { MoviesDetails } from '../pages/MoviesDetails';
import { SeriesDetails } from '../pages/SeriesDetails';
import { EpisodesDetails } from '../pages/EpisodesDetails';
// import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();

export default function Routes() {

    // const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

    // useEffect(() => {
    //     const unsubscribe = auth().onAuthStateChanged(_user => {
    //         console.log(_user)
    //         setUser(_user);
    //     });

    //     return unsubscribe;
    // }, []);

    return (
        <>
            <Stack.Navigator initialRouteName={'SignIn'}>
                <Stack.Screen
                    name='SignIn'
                    component={SignIn}
                    options={{
                        title: 'Lengoflix',
                        headerShown: false,
                    }} />
                <Stack.Screen
                    name='SignUp'
                    component={SignUp}
                    options={{
                        title: 'Lengoflix',
                        headerShown: false,
                    }} />
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
                <Stack.Screen
                    name='EpisodesDetails'
                    component={EpisodesDetails}
                    options={{
                        title: 'Detalhes do Episódio',
                        headerShown: false,
                    }} />
            </Stack.Navigator>

        </>
    );
}