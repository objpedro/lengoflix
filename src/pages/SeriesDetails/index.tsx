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
import LinearGradient from "react-native-linear-gradient";
import TabViewComponent from "../../components/TabView/TabView";

export function SeriesDetails({ route }) {
    const idSerie = route.params.idSerie;
    const urlImage = 'https://image.tmdb.org/t/p/original/';
    const seriesDetailsContext = useContext(SeriesDetailsContext);

    useEffect(() => {
        seriesDetailsContext.getSeriesDetails(idSerie)
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: `${urlImage}${seriesDetailsContext.seriesDetails.backdrop_path}` }}
                style={styles.poster}>
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
                        <View style={styles.numberSeasonsContainer}>
                            <Text style={styles.genres}>{seriesDetailsContext.seriesDetails.number_of_seasons} Temporadas</Text>
                            <FlatList
                                data={seriesDetailsContext.seriesDetails.genres}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <Text style={styles.genres}> • {item.name}</Text>
                                )}
                            />
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>
            <TabViewComponent />
        </View>
    )
}