import React, {
    useState,
    useEffect,
    useContext
} from "react";
import {
    Text,
    View,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { EpisodesContext } from "../../../../contexts/Episodes/EpisodesContex";
import { SeriesDetailsContext } from "../../../../contexts/SeriesDetails/SeriesDetailsContex";
import { styles } from "./styles";

export function Episodes() {
    const seriesDetailsContext = useContext(SeriesDetailsContext);
    const episodesContext = useContext(EpisodesContext);
    const number_of_seasons = seriesDetailsContext.seriesDetails.number_of_seasons;
    const idSerie = seriesDetailsContext.seriesDetails.id;
    const idSeason = 1;
    // const season

    useEffect(() => {
        episodesContext.getEpisodes(idSerie, idSeason)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>
                Olá mundo!
            </Text>
        </View>
    )
}