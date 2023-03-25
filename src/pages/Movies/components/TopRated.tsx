import React, { useContext, useEffect, useState } from "react";
import {
    Text,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import { MovieContext } from "../../../contexts/Movie/MovieContext";

export function TopRated() {
    const navigation = useNavigation();
    const movieContext = useContext(MovieContext);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    async function loadContext() {
        if (loading) return;
        setLoading(true);
        await movieContext.movieTopRated(page + 1);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        movieContext.movieTopRated(page);
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Text style={styles.cabecalho}>Aclamados pela crítica</Text>
            <FlatList
                data={movieContext.listTopRated}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
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
            {
                movieContext.load
                    ?
                    <ActivityIndicator
                        size="large"
                        color={'#fff'}
                        style={{
                            alignItems: 'center',
                            justifyContent: "center"
                        }} />
                    :
                    <></>
            }
        </ScrollView>
    )
}