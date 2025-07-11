import React, { useContext, useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, Text, SafeAreaView, View } from 'react-native';
import { CustomList } from "../../components/CustomList/CustomList";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { MovieContext } from "../../contexts/Movie/MovieContext";

export function Movies() {
    const movieContext = useContext(MovieContext);
    const navigation = useNavigation()

    useEffect(() => {
        movieContext.movieUpcoming(1);
        movieContext.movieTopRated(1);
        movieContext.moviePopular(1);
    }, [])

    return (
        <View style={styles.nameUserContainer}>
            <ScrollView>
                <CustomList
                    typeShow={'movie'}
                    movieList={movieContext.listaFilmes}
                    listName={"Lançamentos"}
                    functionName={"movieUpcoming"}
                    searchData={''} />

                <CustomList
                    typeShow={'movie'}
                    movieList={movieContext.listTopRated}
                    listName={"Aclamados pela Crítica"}
                    functionName={"movieTopRated"}
                    searchData={''} />

                <CustomList
                    typeShow={'movie'}
                    movieList={movieContext.listPopular}
                    listName={"Populares"}
                    functionName={"moviePopular"}
                    searchData={''} />
            </ScrollView>
        </View>
    )
}