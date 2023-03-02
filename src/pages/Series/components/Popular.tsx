import React, { useContext, useEffect } from "react";
import {
    ScrollView,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from 'react-native';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SeriesContext } from "../../../contexts/Series/SeriesContext";

export function Popular() {
    const navigation = useNavigation();
    const seriesContext = useContext(SeriesContext);

    useEffect(() => {
        seriesContext.obterSeries();
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <Text style={styles.cabecalho}>Populares</Text>
            <FlatList
                data={seriesContext.listaSeries}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={series => series.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SeriesDetails', { idSeries: item.id })
                        }} >
                        <Image
                            style={styles.poster}
                            source={{ uri: `https://image.tmdb.org/t/p/original/${item.poster_path}` }} />
                    </TouchableOpacity>
                )}
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