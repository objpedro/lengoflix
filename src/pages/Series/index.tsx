import React from "react";
import { ScrollView, Text } from 'react-native';
import { Popular } from './components/Popular';

export function Series() {
    return (
        <ScrollView>
            <Popular />
        </ScrollView>
    )
}