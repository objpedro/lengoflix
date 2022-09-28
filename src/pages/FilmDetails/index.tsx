import React, { useState, useEffect, useContext } from "react";
import {
    Text,
    View,
    Image,
} from 'react-native';
import styles from "./styles";
import { filmDetailsService } from "../../services/requests/filmDetailsService";
import { FilmeDetailsContext } from "../../contexts/FilmeDetails/FilmeDetailsContex";

export function FilmDetails({ route }) {

    const filmeDetailsContext = useContext(FilmeDetailsContext);
    const [detalhes, setDetalhes] = useState([]);
    const [loading, setLoading] = useState(false);

    async function carregaDetalhes() {
        setLoading(true)
        const resultado = await filmDetailsService(route.params.idFilm);
        setDetalhes(resultado);
        setLoading(false)
    }

    useEffect(() => {
        carregaDetalhes()
        console.log("route.params.idFilm", route.params.idFilm);
        filmeDetailsContext.listarFilmeDetails(route.params.idFilm)
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/original/${detalhes.backdrop_path}` }}
                style={styles.poster} />
            <Text style={styles.tituloDoFilme}>{detalhes.title}</Text>
            <Text style={styles.descricao}>{detalhes.overview}</Text>
        </View>
    )
}