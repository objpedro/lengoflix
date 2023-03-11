import React, { useContext, useEffect, useState } from "react";
import {
    Text,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SeriesContext } from "../../../contexts/Series/SeriesContext";

export function Popular() {
    const navigation = useNavigation();
    const seriesContext = useContext(SeriesContext);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    async function loadContext() {
        if (loading) return;
        setLoading(true);
        await seriesContext.obterSeries(page + 1);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        seriesContext.obterSeries(page);
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Text style={styles.cabecalho}>Populares</Text>
            <FlatList
                data={seriesContext.listaSeries}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SeriesDetails', { idSerie: item.id })
                        }} >
                        <Image
                            style={styles.poster}
                            source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} />
                    </TouchableOpacity>
                )}
                onEndReached={loadContext}
                onEndReachedThreshold={0.1}
            />
            {
                seriesContext.load
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