import React from "react";
import { ScrollView } from 'react-native';
import styles from "./styles";
import { Filmes } from "../Filmes";

export function Home() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Filmes />
        </ScrollView>
    )
}