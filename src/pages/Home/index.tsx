import React from "react";
import {
    View
} from 'react-native';
import { TabNavigator } from "../../components/TabNavigation";

import { Filmes } from "../Filmes";
import { Filtro } from "../Filtro";

export function Home() {
    return (
        <View
            style={{ flex: 1 }}>
            <TabNavigator
                itens={[
                    { titulo: 'Filmes', page: Filmes, icone: require("../../assets/TabIcon/user.png"), id: "tabFilm" },
                    { titulo: 'Filtro', page: Filtro, icone: require('../../assets/TabIcon/search.png'), id: "tabFiltro" },
                ]} />
        </View>
    )
}