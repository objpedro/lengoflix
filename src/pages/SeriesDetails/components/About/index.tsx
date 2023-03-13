import React, { useContext } from "react";
import {
    Text,
    View,
    Image,
    FlatList,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { SeriesDetailsContext } from "../../../../contexts/SeriesDetails/SeriesDetailsContex";
import { styles } from "./styles";

export function About() {
    const urlImage = 'https://image.tmdb.org/t/p/original/';
    const seriesDetailsContext = useContext(SeriesDetailsContext);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.tituloOriginal}>Titulo original: {seriesDetailsContext.seriesDetails.original_name}</Text>
                <View style={styles.genresContainer}>
                </View>
                <View style={styles.networksContainer}>
                    <FlatList
                        data={seriesDetailsContext.seriesDetails.networks}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <View style={styles.containerLogo}>
                                <Image
                                    source={{ uri: `${urlImage}${item.logo_path}` }}
                                    style={styles.networks} />
                            </View>
                        )}
                    />
                </View>
                {
                    seriesDetailsContext.seriesDetails.overview !== '' ?
                        <Text style={styles.descricao}>{seriesDetailsContext.seriesDetails.overview}</Text>
                        :
                        <Text style={styles.descricao}>Descrição indisponível</Text>
                }
            </ScrollView>
        </SafeAreaView>
    )
}