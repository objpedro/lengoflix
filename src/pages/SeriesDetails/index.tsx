import React, { useState, useEffect, useContext } from "react";
import {
    Text,
    View,
    Image,
    FlatList
} from 'react-native';
import styles from "./styles";
import { SeriesDetailsContext } from "../../contexts/SeriesDetails/SeriesDetailsContex";

export function SeriesDetails({ route }) {
    const idSerie = route.params.idSerie;
    const urlImage = 'https://image.tmdb.org/t/p/original/';
    const seriesDetailsContext = useContext(SeriesDetailsContext);
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
            <Text style={styles.tituloOriginal}>Titulo original: {seriesDetailsContext.seriesDetails.original_name}</Text>
            <View style={styles.genresContainer}>
                <FlatList
                    data={seriesDetailsContext.seriesDetails.genres}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <Text style={styles.genres}>{item.name} • </Text>
                    )}
                />
            </View>
            <View style={styles.networksContainer}>
            <FlatList
                    data={seriesDetailsContext.seriesDetails.networks}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={styles.containerLogo}>
                            <Image
                                source={{ uri: `${urlImage}${item.logo_path}` }}
                                style={styles.networks} />
                        </View>
                    )}
                />
            </View>
            <Text style={styles.descricao}>{seriesDetailsContext.seriesDetails.overview}</Text>
        </View>
    )
}