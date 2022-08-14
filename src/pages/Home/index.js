import React, { useState, useEffect } from "react";
import { ScrollView, Text } from 'react-native';
import styles from "./styles";
import { Filmes } from "../components/Filmes";
import { lancamentosService } from "../../services/requests/lancamentosService";

export function Home() {
    const [filmes, setFilmes] = useState([]);

    async function carregaFilmes() {
        const resultado = await lancamentosService();
        setFilmes(resultado);
    }

    useEffect(() => {
        carregaFilmes();
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Text style={styles.cabecalho}>Lançamentos</Text>
            <Filmes filmes={filmes} />

            <Text style={styles.cabecalho}>Lançamentos</Text>
            <Filmes filmes={filmes} />

            <Text style={styles.cabecalho}>Lançamentos</Text>
            <Filmes filmes={filmes} />

            <Text style={styles.cabecalho}>Lançamentos</Text>
            <Filmes filmes={filmes} />

            <Text style={styles.cabecalho}>Lançamentos</Text>
            <Filmes filmes={filmes} />

            <Text style={styles.cabecalho}>Lançamentos</Text>
            <Filmes filmes={filmes} />
        </ScrollView>
    )
}