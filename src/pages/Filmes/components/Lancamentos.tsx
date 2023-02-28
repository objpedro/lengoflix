import React, { useContext, useState, useEffect } from "react";
import {
    View,
    ScrollView,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    TextInput,
} from 'react-native';
import styles from "../styles";
import { useNavigation } from "@react-navigation/native";
import { FilmeContext } from "../../../contexts/Filme/FilmeContext";
import { ListaDeFilmes } from "./ListaDeFilmes";

export function Lancamentos() {
    const navigation = useNavigation();
    const filmeContext = useContext(FilmeContext);
    const [searchData, setSearchData] = useState<string>('');

    useEffect(() => {
        if (searchData === '') {
            filmeContext.setListaFilmesFiltrados(filmeContext.listaFilmes)
        } else {
            filmeContext.listarFilmesFiltrados(searchData);
        }
    }, []);

    useEffect(() => {
        filmeContext.listarFilmes();
    }, [])

    return (
        <>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchFilme}
                    onChangeText={(tituloFilme: string) => setSearchData(tituloFilme)}
                    value={searchData}
                    placeholder="Buscar Filme"
                />
                <TouchableOpacity
                    style={styles.searchButton}
                    onPress={() => filmeContext.listarFilmesFiltrados(searchData)}
                >
                    <Text style={styles.textButton}>Buscar</Text>
                </TouchableOpacity>
                {console.log(searchData)}
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <Text style={styles.cabecalho}>Lançamentos</Text>
                <FlatList
                    data={filmeContext.listaFilmesFiltrados}
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
        </>
    )
}