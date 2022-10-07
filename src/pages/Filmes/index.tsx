import React from "react";
import { ScrollView, Text } from 'react-native';
import { Lancamentos } from "./components/Lancamentos";

export function Filmes() {
    return (
        <ScrollView>
            <Lancamentos />
        </ScrollView>
    )
}