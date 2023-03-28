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
import LinearGradient from "react-native-linear-gradient";
import { Loading } from "../Loading";

export function CustomList({ movieList, listName, functionName }) {
    const navigation = useNavigation();
    const movieContext = useContext(MovieContext);
    const movieDetailsContext = useContext(MovieDetailsContext);
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
            default:
                break;
        }
        setPage(page + 1);
        setLoading(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{listName}</Text>
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
                                        movieDetailsContext.getMovieDetails(item.id)
                                        navigation.navigate('MoviesDetails', { idFilm: item.id })
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