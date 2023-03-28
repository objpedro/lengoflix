import React, { useContext, useEffect, useState } from "react";
import { ScrollView, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { CustomList } from "../../components/CustomList/CustomList";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../contexts/Firebase/FirebaseContex";
import { UserContext } from "../../contexts/User/UserContext";
import styles from "./styles";
import { MovieContext } from "../../contexts/Movie/MovieContext";

export function Movies() {
    const userContext = useContext(UserContext);
    const movieContext = useContext(MovieContext);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const firebaseContext = useContext(FirebaseContext);
    const navigation = useNavigation()

    useEffect(() => {
        movieContext.movieUpcoming(page);
        movieContext.movieTopRated(page);
        movieContext.moviePopular(page);
    }, [])

    return (
        <SafeAreaView style={styles.nameUserContainer}>
            {userContext.user && <Text style={styles.nameUser}>Olá, {userContext.user}</Text>}
            <ScrollView>
                <CustomList
                    movieList={movieContext.listaFilmes}
                    listName={"Lançamentos"}
                    functionName={"movieUpcoming"} />

                <CustomList
                    movieList={movieContext.listTopRated}
                    listName={"Aclamados pela Crítica"}
                    functionName={"movieTopRated"} />

                <CustomList
                    movieList={movieContext.listPopular}
                    listName={"Populares"}
                    functionName={"moviePopular"} />

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