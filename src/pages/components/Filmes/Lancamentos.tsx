import React, { useContext, useState, useEffect } from "react";
import {
    ScrollView,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import styles from "./styles";
import { lancamentosService } from "../../../services/requests/lancamentosService";
import { useNavigation } from "@react-navigation/native";
import { FilmeContext } from "../../../contexts/Filme/FilmeContext";
import { FooterList } from "../FooterList";

export function Lancamentos() {
    const [filmesLancamentos, setFilmesLancamentos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const filmeContext = useContext(FilmeContext);

    useEffect(() => {
        filmeContext.listarFilmes();
    }, []);

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
                onEndReached={filmeContext.listaFilmes}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<FooterList load={loading} />}
            />
        </ScrollView>
    )
}