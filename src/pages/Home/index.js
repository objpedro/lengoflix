import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import styles from "./styles";
import { lancamentosService } from "../../services/requests/lancamentosService";

export function Home({ navigation }) {
    const [filmes, setFilmes] = useState([]);

    async function carregaFilmes() {
        const resultado = await lancamentosService()
        setFilmes(resultado);
    }

    useEffect(() => {
        carregaFilmes()
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.cabecalho}>Lançamentos</Text>
            <FlatList
                data={filmes}
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
            />
        </View>
    )
}