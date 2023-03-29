import React, { useContext, useState } from "react";
import {
    Text,
    View,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { MovieContext } from "../../contexts/Movie/MovieContext";
import { MovieDetailsContext } from "../../contexts/MovieDetails/MovieDetailsContex";
import { SeriesDetailsContext } from "../../contexts/SeriesDetails/SeriesDetailsContex";
import LinearGradient from "react-native-linear-gradient";
import { FiltroContext } from "../../contexts/Filtro/FiltroContext";
import { Loading } from "../Loading";

export function CustomList({ movieList, listName, functionName, searchData }) {
    const movieContext = useContext(MovieContext);
    const movieDetailsContext = useContext(MovieDetailsContext);
    const seriesDetailsContext = useContext(SeriesDetailsContext);
    const filtroContext = useContext(FiltroContext);
    const navigation = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const gradientColor = [
        'rgba(0,0,0,1)',
        'rgba(0,0,0,0)',
        'rgba(0,0,0,0)',
        'rgba(0,0,0,0)',

        'rgba(0,0,0,0)',
        'rgba(0,0,0,0)',
        'rgba(0,0,0,0)',
        'rgba(0,0,0,1)',
    ]

    async function loadContext() {
        if (loading) return;
        setLoading(true);
        switch (functionName) {
            case 'movieUpcoming':
                await movieContext.movieUpcoming(page + 1);
                break;
            case 'moviePopular':
                await movieContext.moviePopular(page + 1);
                break;
            case 'movieTopRated':
                await movieContext.movieTopRated(page + 1);
                break;
            case 'listarFilmesFiltrados':
                await filtroContext.getTitlesPages(searchData, page + 1);
                break;
            default:
                break;
        }
        setPage(page + 1);
        setLoading(false);
    }

    return (
        <View style={styles.container}>
            {listName && <Text style={styles.header}>{listName}</Text>}
            <LinearGradient style={styles.linearGradient}
                colors={gradientColor}
                useAngle={true}
                angle={90}>
                <View style={styles.body}>
                    <FlatList
                        data={movieList}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity
                                    onPress={() => {
                                        switch (item.media_type) {
                                            case 'movie':
                                                movieDetailsContext.getMovieDetails(item.id)
                                                navigation.navigate('MoviesDetails', { idFilm: item.id })
                                                break;
                                            case 'tv':
                                                seriesDetailsContext.getSeriesDetails(item.id)
                                                navigation.navigate('SeriesDetails', { idSerie: item.id })
                                                break;
                                            default:
                                                console.log('item.media_type', item.media_type)
                                        }
                                    }} >
                                    <Image
                                        style={styles.poster}
                                        source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} />
                                </TouchableOpacity>
                            </View>
                        )}
                        onEndReached={loadContext}
                        onEndReachedThreshold={0.1}
                    />
                    <Loading size="large" isVisible={loading} />
                </View>
            </LinearGradient>
        </View >
    )
}