import React, { useState, useEffect } from "react";
import { ScrollView, Text } from 'react-native';
import styles from "./styles";
import { Lancamentos } from "../components/Filmes/Lancamentos";

export function Home() {

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Lancamentos />
        </ScrollView>
    )
}