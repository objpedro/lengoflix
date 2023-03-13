import React, { useState, useEffect, useContext } from "react";
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

export function MoviesDetails({ route }) {
    const idFilm = route.params.idFilm;
    const movieDetailsContext = useContext(MovieDetailsContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        movieDetailsContext.getMovieDetails(idFilm)
        movieDetailsContext.getReviews(movieDetailsContext.movieDetails.imdb_id)
    }, [])

    return (
        <>
            <ImageBackground
                style={styles.poster}
                source={{ uri: `https://image.tmdb.org/t/p/original/${movieDetailsContext.movieDetails.backdrop_path}` }}>
                <LinearGradient
                    colors={[
                        'rgba(0,0,0,0.0)',
                        'rgba(0,0,0,0.6)',
                        'rgba(0,0,0,0.7)',
                        'rgba(0,0,0,1)',
                    ]}
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

            <View style={styles.container}>
                <Text style={styles.tituloOriginal}>Titulo original: {movieDetailsContext.movieDetails.original_title}</Text>
                <View style={styles.containerInfo}>
                    <Image
                        source={require('../../assets/imdb_logo.png')}
                        style={styles.imdbLogo} />
                    <Text style={styles.nota}>6.7/10</Text>
                    {/* <Text style={styles.nota}>{movieDetailsContext.nota.imDb}/10</Text> */}
                </View>

                <Text style={styles.descricao}>{movieDetailsContext.movieDetails.overview}</Text>
            </View>
        </>
    )
}