import React, { useState, useEffect, useContext } from "react";
import {
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { FiltroContext } from "../../contexts/Filtro/FiltroContext";

export function Filtro() {
    const navigation = useNavigation();
    const filmesFiltradosContext = useContext(FiltroContext);
    const [searchData, setSearchData] = useState<string>('');

    useEffect(() => {
        if (searchData === '') {
            console.log("Você não pesquisou nenhum filme ainda")
        } else {
            filmesFiltradosContext.listarFilmesFiltrados(searchData);
        }
    }, []);

    return (
        <View>
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
                <Text>Buscar</Text>
            </TouchableOpacity>

            {
                filmesFiltradosContext.listaFilmesFiltrados === null
                    ?
                    <>
                        <Text>Você não pesquisou nenhum filme</Text>
                    </>
                    :
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
            }
        </View>
    )
}