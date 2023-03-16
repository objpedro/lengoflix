import React from "react";
import {
    Text,
    View,
    Image,
    ScrollView,
    SafeAreaView,
    ImageBackground,
} from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { Episode } from "../../dto/domain/Episode";
import { styles } from "./styles";

export function EpisodesDetails({ route }) {
    const episode: Episode = route.params.episode;
    const urlImage: string = 'https://image.tmdb.org/t/p/original/';
    const linearColors: string[] = [
        'rgba(0,0,0,0.0)',
        'rgba(0,0,0,0.6)',
        'rgba(0,0,0,0.7)',
        'rgba(0,0,0,1)',
    ]

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: `${urlImage}${episode.still_path}` }}
                style={styles.poster}>
                <LinearGradient
                    colors={linearColors}
                    style={styles.linearGradient}>
                    <Text style={styles.seasonNumber}>T{episode.season_number} | E{episode.season_number}</Text>
                    <Text style={styles.episodeName}>{episode.name}</Text>
                </LinearGradient>
            </ImageBackground>
            <SafeAreaView style={styles.body}>
                <ScrollView>
                    <View style={styles.airDateContainer}>
                        <View style={styles.voteAverageContainer}>
                            <Image
                                source={require('../../assets/the_movie_db_logo.png')}
                                style={styles.tmdbLogo} />
                            <Text style={styles.airDate}>{episode.vote_average.toFixed(1)} / 10</Text>
                        </View>
                        <Text style={styles.airDate}>{episode.air_date.replace(/(\d*)-(\d*)-(\d*).*/, '$3/$2/$1')}</Text>
                    </View>
                    <Text style={styles.airDate}>{episode.overview}</Text>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}