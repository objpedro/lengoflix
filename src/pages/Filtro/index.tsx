import React, { useState, useEffect, useContext } from "react";
import {
    Text,
    View,
    Image,
    FlatList,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FiltroContext } from "../../contexts/Filtro/FiltroContext";

export function Filtro() {
    const navigation = useNavigation();
    const filmesFiltradosContext = useContext(FiltroContext);
    const [searchData, setSearchData] = useState<string>('');

    useEffect(() => {
        filmesFiltradosContext.listarFilmesFiltrados(searchData);
        console.log("filmesFiltradosContext.listaFilmesFiltrados", filmesFiltradosContext.listaFilmesFiltrados);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchFilme}
                    onChangeText={(tituloFilme: string) => setSearchData(tituloFilme)}
                    value={searchData}
                    placeholder="Pesquisar Filme"
                />
                <TouchableOpacity
                    style={styles.searchButton}
                    onPress={() => filmesFiltradosContext.listarFilmesFiltrados(searchData)}
                >
                    <Text style={styles.textSearchButton}>Buscar</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={filmesFiltradosContext.listaFilmesFiltrados}
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