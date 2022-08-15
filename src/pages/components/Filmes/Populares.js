import React, { useState, useEffect } from "react";
import {
    ScrollView,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import styles from "./styles";
import { filmesPopularesService } from "../../../services/requests/filmesPopularesService";
import { useNavigation } from "@react-navigation/native";
import { FooterList } from "../FooterList";

export function Populares() {
    const [filmesPopulares, setFilmesPopulares] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    async function carregaFilmes() {
        if (loading) return;
        setLoading(true);
        const resultado = await filmesPopularesService(page);
        setFilmesPopulares([...filmesPopulares, ...resultado]);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        carregaFilmes();
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Text style={styles.cabecalho}>Populares no Lengoflix</Text>
            <FlatList
                data={filmesPopulares}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={filmes => filmes.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('FilmDetails', { idFilm: item.id })
                        }} >
                        <Image
                            style={styles.poster}
                            source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} />
                    </TouchableOpacity>
                )}
                onEndReached={carregaFilmes}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<FooterList load={loading} />}
            />
        </ScrollView>
    )
}