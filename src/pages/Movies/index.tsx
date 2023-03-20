import React from "react";
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { Lancamentos } from "./components/Lancamentos";

import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";

function handleSignOut() {
    auth().signOut()
}

export function Movies() {
    const navigation = useNavigation()
    return (
        <ScrollView>
            <Lancamentos />
            <TouchableOpacity
                onPress={() => {
                    handleSignOut
                    navigation.navigate('SignIn')
                }}
                style={{
                    margin: 20,
                    padding: 5,
                    backgroundColor: 'blue',
                    alignItems: 'center'
                }}>
                <Text style={{
                    color: 'white'
                }}>Deslogar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}