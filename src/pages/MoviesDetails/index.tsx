import React, { useState, useEffect, useContext } from "react";
import {
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';
import styles from "./styles";
import { FilmeDetailsContext } from "../../contexts/FilmeDetails/FilmeDetailsContex";

export function MoviesDetails({ route }) {
    const idFilm = route.params.idFilm;
    const filmeDetailsContext = useContext(FilmeDetailsContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        filmeDetailsContext.listarNotas(filmeDetailsContext.filmeDetails.imdb_id)
        filmeDetailsContext.listarFilmeDetails(idFilm)
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/original/${filmeDetailsContext.filmeDetails.backdrop_path}` }}
                style={styles.poster} />
            <Text style={styles.tituloDoFilme}>{filmeDetailsContext.filmeDetails.title}</Text>
            <Text style={styles.tituloOriginal}>Titulo original: {filmeDetailsContext.filmeDetails.original_title}</Text>
            <View style={styles.containerInfo}>
                <Image
                    source={require('../../assets/imdb_logo.png')}
                    style={styles.imdbLogo} />
                <Text style={styles.nota}>6.7/10</Text>
                {/* <Text style={styles.nota}>{filmeDetailsContext.nota.imDb}/10</Text> */}
                <Image
                    source={require('../../assets/metacritic_logo.png')}
                    style={styles.metacriticLogo} />
                <Text style={styles.nota}>77/10</Text>
                {/* <Text style={styles.nota}>{filmeDetailsContext.nota.metacritic}/10</Text> */}
            </View>
            <View style={styles.genresContainer}>
                <FlatList
                    data={filmeDetailsContext.filmeDetails.genres}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <Text style={styles.genres}>{item.name} • </Text>
                    )}
                />
            </View>
            <Text style={styles.descricao}>{filmeDetailsContext.filmeDetails.overview}</Text>
        </View>
    )
}