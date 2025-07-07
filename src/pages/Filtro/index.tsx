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
import { FiltroContext } from "../../contexts/Filtro/FiltroContext";
import { CustomList } from "../../components/CustomList/CustomList";

export function Filtro() {
    const filmesFiltradosContext = useContext(FiltroContext);
    const [searchData, setSearchData] = useState<string>('');
    const [searchResult, setSearchResult] = useState<string>('');

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchFilme}
                    onChangeText={(tituloFilme: string) => setSearchData(tituloFilme)}
                    value={searchData}
                    placeholder="Pesquisar"
                />
                <TouchableOpacity
                    style={styles.searchButton}
                    onPress={() => {
                        filmesFiltradosContext.listarFilmesFiltrados(searchData, 1)
                        setSearchResult(searchData)
                        setSearchData('');
                    }}
                >
                    <Text style={styles.textSearchButton}>Buscar</Text>
                </TouchableOpacity>
            </View>
            {searchResult && <Text style={styles.searchResult}>{`Resultados para "${searchResult}":`}</Text>}
            <CustomList
                movieList={filmesFiltradosContext.listaFilmesFiltrados}
                listName={""}
                functionName={"listarFilmesFiltrados"}
                searchData={searchResult} />
        </View>
    )
}