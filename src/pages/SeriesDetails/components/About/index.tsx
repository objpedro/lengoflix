import React, { useState, useEffect, useContext } from "react";
import {
    Text,
    View,
    Image,
    FlatList
} from 'react-native';
import { styles } from "./styles";

export function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>
                Olá mundo!
            </Text>
        </View>
    )
}