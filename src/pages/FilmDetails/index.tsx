import React, { useState, useEffect, useContext } from "react";
import {
    Text,
    View,
    Image,
} from 'react-native';
import styles from "./styles";
import { FilmeDetailsContext } from "../../contexts/FilmeDetails/FilmeDetailsContex";

export function FilmDetails({ route }) {

    const filmeDetailsContext = useContext(FilmeDetailsContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        filmeDetailsContext.listarFilmeDetails(route.params.idFilm)
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/original/${filmeDetailsContext.filmeDetails.backdrop_path}` }}
                style={styles.poster} />
            <Text style={styles.tituloDoFilme}>{filmeDetailsContext.filmeDetails.title}</Text>
            <Text style={styles.descricao}>{filmeDetailsContext.filmeDetails.overview}</Text>
        </View>
    )
}