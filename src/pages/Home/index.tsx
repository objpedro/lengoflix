import React, { useState, useEffect } from "react";
import { ScrollView, Text } from 'react-native';
import styles from "./styles";
import { Filmes } from "../Filmes";
import { Lancamentos } from "../Filmes/components/Lancamentos";

export function Home() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Filmes />
        </ScrollView>
    )
}