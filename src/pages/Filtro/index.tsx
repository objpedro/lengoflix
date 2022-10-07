import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    TextInput,
} from 'react-native';

export function Filtro() {

    const [searchData, setSearchData] = useState<string>('');

    return (
        <View>
            <Text>Ola Mundo!</Text>
            <TextInput
                onChangeText={(tituloFilme: string) => setSearchData(tituloFilme)}
                value={searchData}
                placeholder="Pesquisar Filme"
            />
        </View>
    )
}