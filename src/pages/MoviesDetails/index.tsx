import React, { useState, useEffect, useContext } from "react";
import {
    Text,
    View,
    Image,
    FlatList,
    ImageBackground,
} from 'react-native';
import styles from "./styles";
import { FilmeDetailsContext } from "../../contexts/FilmeDetails/FilmeDetailsContex";
import LinearGradient from "react-native-linear-gradient";
import { RunTime } from "../../components/Runtime/Runtime";

export function MoviesDetails({ route }) {
    const idFilm = route.params.idFilm;
    const filmeDetailsContext = useContext(FilmeDetailsContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        filmeDetailsContext.listarNotas(filmeDetailsContext.filmeDetails.imdb_id)
        filmeDetailsContext.listarFilmeDetails(idFilm)
    }, [])

    return (
        <>
            <ImageBackground
                style={styles.poster}
                source={{ uri: `https://image.tmdb.org/t/p/original/${filmeDetailsContext.filmeDetails.backdrop_path}` }}>
                <LinearGradient
                    colors={[
                        'rgba(0,0,0,0.0)',
                        'rgba(0,0,0,0.6)',
                        'rgba(0,0,0,0.7)',
                        'rgba(0,0,0,1)',
                    ]}
                    style={styles.linearGradient}>
                    <View style={styles.genresContainer}>
                        <Text style={styles.tituloDoFilme}>{filmeDetailsContext.filmeDetails.title}</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <RunTime runtime={filmeDetailsContext.filmeDetails.runtime} />
                            <FlatList
                                data={filmeDetailsContext.filmeDetails.genres}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <Text style={styles.genres}> • {item.name}</Text>
                                )}
                            />
                        </View>
                    </View>
                </LinearGradient>
            </ImageBackground>

            <View style={styles.container}>
                <Text style={styles.tituloOriginal}>Titulo original: {filmeDetailsContext.filmeDetails.original_title}</Text>
                <View style={styles.containerInfo}>
                    <Image
                        source={require('../../assets/imdb_logo.png')}
                        style={styles.imdbLogo} />
                    <Text style={styles.nota}>6.7/10</Text>
                    {/* <Text style={styles.nota}>{filmeDetailsContext.nota.imDb}/10</Text> */}
                </View>

                <Text style={styles.descricao}>{filmeDetailsContext.filmeDetails.overview}</Text>
            </View>
        </>
    )
}