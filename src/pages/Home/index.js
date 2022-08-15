import React, { useState, useEffect } from "react";
import { ScrollView, Text } from 'react-native';
import styles from "./styles";
import { Filmes } from "../components/Filmes";
import { Lancamentos } from "../components/Filmes/Lancamentos";

export function Home() {
    const [filmes, setFilmes] = useState([]);

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Lancamentos />
        </ScrollView>
    )
}