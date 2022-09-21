import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
} from 'react-native';
import styles from "./styles";
import { filmDetailsService } from "../../services/requests/filmDetailsService";
import { FooterList } from '../components/FooterList'

export function FilmDetails({ route }) {

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
    }, [])

    return (
        <View style={styles.container}>
            {
                loading
                    ?
                    <>
                        <FooterList
                            load={loading}
                            size='large' />
                    </>
                    :
                    <>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/original/${detalhes.backdrop_path}` }}
                            style={styles.poster} />
                        <Text style={styles.tituloDoFilme}>{detalhes.title}</Text>
                        <Text style={styles.descricao}>{detalhes.overview}</Text>
                    </>
            }
        </View>
    )
}