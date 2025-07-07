import React from "react";
import {
    View
} from 'react-native';
import { TabNavigator } from "../../components/TabNavigation";

import { Movies } from "../Movies";
import { Series } from '../Series';
import { Filtro } from "../Filtro";

export function Home() {
    return (
        <View
            style={{ flex: 1 }}>
            <TabNavigator
                itens={[
                    { titulo: 'Movies', page: Movies, icone: require("../../assets/TabIcon/filme.png"), id: "tabFilm" },
                    { titulo: 'Series', page: Series, icone: require("../../assets/TabIcon/roloFilme.png"), id: "tabFilm" },
                    { titulo: 'Filtro', page: Filtro, icone: require('../../assets/TabIcon/search.png'), id: "tabFiltro" },
                ]} />
        </View>
    )
}