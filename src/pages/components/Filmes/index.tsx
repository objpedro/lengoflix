import React from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export function Filmes(props) {
    const navigation = useNavigation();

    return (
        <FlatList
            data={props.filmes}
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