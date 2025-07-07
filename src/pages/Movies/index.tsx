import React, { useContext, useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { CustomList } from "../../components/CustomList/CustomList";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../contexts/Firebase/FirebaseContex";
import { UserContext } from "../../contexts/User/UserContext";
import styles from "./styles";
import { MovieContext } from "../../contexts/Movie/MovieContext";

export function Movies() {
    const movieContext = useContext(MovieContext);
    const userContext = useContext(UserContext);
    const firebaseContext = useContext(FirebaseContext);
    const navigation = useNavigation()

    useEffect(() => {
        movieContext.movieUpcoming(1);
        movieContext.movieTopRated(1);
        movieContext.moviePopular(1);
    }, [])

    return (
        <SafeAreaView style={styles.nameUserContainer}>
            <ScrollView>
                {userContext.user && <Text style={styles.nameUser}>Olá, {userContext.user}</Text>}
                <CustomList
                    movieList={movieContext.listaFilmes}
                    listName={"Lançamentos"}
                    functionName={"movieUpcoming"}
                    searchData={''} />

                <CustomList
                    movieList={movieContext.listTopRated}
                    listName={"Aclamados pela Crítica"}
                    functionName={"movieTopRated"}
                    searchData={''} />

                <CustomList
                    movieList={movieContext.listPopular}
                    listName={"Populares"}
                    functionName={"moviePopular"}
                    searchData={''} />

                <TouchableOpacity
                    onPress={() => {
                        firebaseContext.handleSignOut();
                        navigation.navigate('Sign')
                    }}
                    style={{
                        margin: 20,
                        padding: 5,
                        backgroundColor: 'blue',
                        alignItems: 'center'
                    }}>
                    <Text style={{
                        color: 'white'
                    }}>Deslogar</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}