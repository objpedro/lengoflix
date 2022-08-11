import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
} from 'react-native';
import styles from "./styles";
import { filmDetailsService } from "../../services/requests/filmDetailsService";

export function FilmDetails({ route }) {

    const [detalhes, setDetalhes] = useState([]);

    async function carregaDetalhes() {
        const resultado = await filmDetailsService(route.params.idFilm)
        setDetalhes(resultado)
    }

    useEffect(() => {
        carregaDetalhes()
    }, [])
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/original/${detalhes.poster_path}` }}
                style={styles.poster} />
            <Text style={styles.tituloDoFilme}>{detalhes.title}</Text>
            <Text style={styles.descricao}>{detalhes.overview}</Text>
        </View>
    )
}