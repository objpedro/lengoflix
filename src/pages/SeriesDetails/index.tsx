import React, { useState, useEffect, useContext } from "react";
import {
    Text,
    View,
    Image,
    ScrollView,
} from 'react-native';
import styles from "./styles";
import { SeriesDetailsContext } from "../../contexts/SeriesDetails/SeriesDetailsContex";

export function SeriesDetails({ route }) {
    const idSerie = route.params.idSerie;
    const imdbLogo = 'https://th.bing.com/th/id/R.96d6a3163510b47bda4d016b465fb380?rik=RdmM%2faKqGkQOUw&riu=http%3a%2f%2fimg4.wikia.nocookie.net%2f__cb20130124112826%2flogopedia%2fimages%2f8%2f8e%2fIMDB.png&ehk=Svd7%2fn42Zig1owSS1hb%2b2k8bFFdbEKW6iFyTQu2u5yw%3d&risl=&pid=ImgRaw&r=0';
    const metacriticLogo = 'https://jagatplay.com/wp-content/uploads/2018/01/metacritic-logo-768x768.png';
    const seriesDetailsContext = useContext(SeriesDetailsContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        seriesDetailsContext.getSeriesDetails(idSerie)
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/original/${seriesDetailsContext.seriesDetails.backdrop_path}` }}
                style={styles.poster} />
            <Text style={styles.tituloDoFilme}>{seriesDetailsContext.seriesDetails.name}</Text>
            <Text style={styles.tituloOriginal}>Titulo original: {seriesDetailsContext.seriesDetails.original_name}</Text>
            <ScrollView>
                <Text style={styles.descricao}>{seriesDetailsContext.seriesDetails.overview}</Text>
            </ScrollView>
        </View>
    )
}