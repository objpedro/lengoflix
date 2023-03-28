import React, { useContext, useEffect, useState } from "react";
import {
    Text,
    View,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import { MovieContext } from "../../../contexts/Movie/MovieContext";
import { MovieDetailsContext } from "../../../contexts/MovieDetails/MovieDetailsContex";
import { Loading } from "../../../components/Loading";

export function Lancamentos() {
    const navigation = useNavigation();
    const movieContext = useContext(MovieContext);
    const movieDetailsContext = useContext(MovieDetailsContext);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    async function loadContext() {
        if (loading) return;
        setLoading(true);
        await movieContext.movieUpcoming(page + 1);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        movieContext.movieUpcoming(page);
    }, [])

    return (
        <View showsVerticalScrollIndicator={false} style={styles.container}>
            <Text style={styles.cabecalho}>Lancamentos</Text>
            <View style={{
                flexDirection: 'row',
            }}>
                <FlatList
                    data={movieContext.listaFilmes}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                movieDetailsContext.getMovieDetails(item.id)
                                navigation.navigate('MoviesDetails', { idFilm: item.id })
                            }} >
                            <Image
                                style={styles.poster}
                                source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} />
                        </TouchableOpacity>
                    )}
                    onEndReached={loadContext}
                    onEndReachedThreshold={0.1}
                />
                <Loading size="large" isVisible={movieContext.load} />
            </View>
        </View>
    )
}