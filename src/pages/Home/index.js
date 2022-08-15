import React, { useState, useEffect } from "react";
import { ScrollView, Text } from 'react-native';
import styles from "./styles";
import { Lancamentos } from "../components/Filmes/Lancamentos";
import { Populares } from "../components/Filmes/Populares";

export function Home() {

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Lancamentos />
            <Populares />
        </ScrollView>
    )
}