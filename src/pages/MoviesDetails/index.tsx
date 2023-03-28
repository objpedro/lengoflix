import React, { useContext } from "react";
import {
    Text,
    View,
    Image,
    FlatList,
    ImageBackground,
} from 'react-native';
import styles from "./styles";
import { MovieDetailsContext } from "../../contexts/MovieDetails/MovieDetailsContex";
import LinearGradient from "react-native-linear-gradient";
import { RunTime } from "../../components/Runtime/Runtime";
import { DateFormat } from "../../components/DateFormat/DateFormat";
import { Loading } from "../../components/Loading";

export function MoviesDetails() {
    const movieDetailsContext = useContext(MovieDetailsContext);
    const gradientColor = [
        'rgba(0,0,0,0.0)',
        'rgba(0,0,0,0.6)',
        'rgba(0,0,0,0.7)',
        'rgba(0,0,0,1)',
    ]

    return (
        <View style={styles.container}>
            {
                movieDetailsContext.load ?
                    <Loading size="large" isVisible={true} />
                    :
                    <>
                        <ImageBackground
                            style={styles.poster}
                            source={{ uri: `https://image.tmdb.org/t/p/original/${movieDetailsContext.movieDetails.backdrop_path}` }}>
                            <LinearGradient
                                colors={gradientColor}
                                style={styles.linearGradient}>
                                <View style={styles.genresContainer}>
                                    <Text style={styles.tituloDoFilme}>{movieDetailsContext.movieDetails.title}</Text>
                                    <View style={styles.runTimeContainer}>
                                        <RunTime runtime={movieDetailsContext.movieDetails.runtime} />
                                        <FlatList
                                            data={movieDetailsContext.movieDetails.genres}
                                            horizontal={true}
                                            renderItem={({ item }) => (
                                                <Text style={styles.genres}> • {item.name}</Text>
                                            )}
                                        />
                                    </View>
                                </View>
                            </LinearGradient>
                        </ImageBackground>
                        <View style={styles.containerOriginalTitle}>
                            <Text style={styles.tituloOriginal}>Titulo original: {movieDetailsContext.movieDetails.original_title}</Text>
                            <View style={styles.containerInfo}>
                                <View style={styles.releaseDateContainer}>
                                    <View style={styles.voteAverageContainer}>
                                        <Image
                                            source={require('../../assets/the_movie_db_logo.png')}
                                            style={styles.tmdbLogo} />
                                        <Text style={styles.releaseDate}>{movieDetailsContext.movieDetails.vote_average} / 10</Text>
                                    </View>
                                    <DateFormat date={movieDetailsContext.movieDetails.release_date} />
                                </View>
                            </View>
                            <Text style={styles.descricao}>{movieDetailsContext.movieDetails.overview}</Text>
                        </View>
                    </>
            }
        </View>
    )
}