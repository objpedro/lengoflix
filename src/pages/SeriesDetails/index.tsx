import React, { useState, useEffect, useContext } from "react";
import {
    Text,
    View,
    Image,
    FlatList,
    ImageBackground
} from 'react-native';
import styles from "./styles";
import { SeriesDetailsContext } from "../../contexts/SeriesDetails/SeriesDetailsContex";
import { EpisodesContext } from "../../contexts/Episodes/EpisodesContex";
import TabViewExample from "./components/TabViewExample";
import LinearGradient from "react-native-linear-gradient";

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
        <>
            <ImageBackground
                source={{ uri: `${urlImage}${seriesDetailsContext.seriesDetails.backdrop_path}` }}
                style={styles.poster}
            >
                <LinearGradient
                    colors={[
                        'rgba(0,0,0,0.0)',
                        'rgba(0,0,0,0.6)',
                        'rgba(0,0,0,0.7)',
                        'rgba(0,0,0,1)',
                    ]}
                    style={styles.linearGradient}>
                    <View style={styles.genresContainer}>
                        <Text style={styles.tituloDoFilme}>{seriesDetailsContext.seriesDetails.name}</Text>
                        <Text style={styles.genres}>{seriesDetailsContext.seriesDetails.number_of_seasons} Temporadas</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>
            <TabViewExample />
        </>
    )
}