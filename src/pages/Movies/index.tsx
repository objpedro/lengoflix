import React from "react";
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { Lancamentos } from "./components/Lancamentos";

export function Movies() {
    return (
        <ScrollView>
            <Lancamentos />
            <TouchableOpacity style={{
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