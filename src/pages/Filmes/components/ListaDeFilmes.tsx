import React from "react";
import {
    FlatList,
    TouchableOpacity,
    Image
} from 'react-native';
import { Filme } from "../../../dto/domain/Filme";
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";

export function ListaDeFilmes(listaDeFilmes: Filme[]) {
    const navigation = useNavigation();
    return (
        <FlatList
            data={listaDeFilmes}
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
    )
}