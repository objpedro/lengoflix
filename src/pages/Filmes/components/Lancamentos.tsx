import React, { useContext, useEffect } from "react";
import {
    ScrollView,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from 'react-native';
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import { FilmeContext } from "../../../contexts/Filme/FilmeContext";

export function Lancamentos() {
    const navigation = useNavigation();
    const filmeContext = useContext(FilmeContext);

    useEffect(() => {
        filmeContext.listarFilmes();
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Text style={styles.cabecalho}>Lançamentos</Text>
            <FlatList
                data={filmeContext.listaFilmes}
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
            {
                filmeContext.load
                    ?
                    <ActivityIndicator
                        size="large"
                        color={'#fff'}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: "center"
                        }} />
                    :
                    <></>
            }
        </ScrollView>
    )
}