import React, { useState, useEffect, useContext } from "react";
import {
    Text,
    View,
    Image,
    FlatList
} from 'react-native';
import styles from "./styles";
import { SeriesDetailsContext } from "../../contexts/SeriesDetails/SeriesDetailsContex";
import { EpisodesContext } from "../../contexts/Episodes/EpisodesContex";
import TabViewExample from "./components/TabViewExample";

export function SeriesDetails({ route }) {
    const idSerie = route.params.idSerie;
    const urlImage = 'https://image.tmdb.org/t/p/original/';
    const seriesDetailsContext = useContext(SeriesDetailsContext);
    const episodesContext = useContext(EpisodesContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        seriesDetailsContext.getSeriesDetails(idSerie)
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `${urlImage}${seriesDetailsContext.seriesDetails.backdrop_path}` }}
                style={styles.poster} />
            <Text style={styles.tituloDoFilme}>{seriesDetailsContext.seriesDetails.name}</Text>
            <TabViewExample />
        </View>
    )
}