import React, { useState, useEffect, useContext } from "react";
import {
    Text,
    View,
    Image,
} from 'react-native';
import styles from "./styles";
import { FilmeDetailsContext } from "../../contexts/FilmeDetails/FilmeDetailsContex";

export function MoviesDetails({ route }) {
    const idFilm = route.params.idFilm;
    const imdbLogo = 'https://th.bing.com/th/id/R.96d6a3163510b47bda4d016b465fb380?rik=RdmM%2faKqGkQOUw&riu=http%3a%2f%2fimg4.wikia.nocookie.net%2f__cb20130124112826%2flogopedia%2fimages%2f8%2f8e%2fIMDB.png&ehk=Svd7%2fn42Zig1owSS1hb%2b2k8bFFdbEKW6iFyTQu2u5yw%3d&risl=&pid=ImgRaw&r=0';
    const metacriticLogo = 'https://jagatplay.com/wp-content/uploads/2018/01/metacritic-logo-768x768.png';
    const filmeDetailsContext = useContext(FilmeDetailsContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        filmeDetailsContext.listarNotas(filmeDetailsContext.filmeDetails.imdb_id)
        filmeDetailsContext.listarFilmeDetails(idFilm)
    }, [])

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/original/${filmeDetailsContext.filmeDetails.backdrop_path}` }}
                style={styles.poster} />
            <Text style={styles.tituloDoFilme}>{filmeDetailsContext.filmeDetails.title}</Text>
            <Text style={styles.tituloOriginal}>Titulo original: {filmeDetailsContext.filmeDetails.original_title}</Text>
            <View style={styles.containerInfo}>
                <Image
                    source={{ uri: imdbLogo }}
                    style={styles.imdbLogo} />
                {/* <Text style={styles.nota}>6.7/10</Text> */}
                <Text style={styles.nota}>{filmeDetailsContext.nota.imDb}/10</Text>
                <Image
                    source={{ uri: metacriticLogo }}
                    style={styles.metacriticLogo} />
                {/* <Text style={styles.nota}>77/10</Text> */}
                <Text style={styles.nota}>{filmeDetailsContext.nota.metacritic}/10</Text>
            </View>

            <Text style={styles.descricao}>{filmeDetailsContext.filmeDetails.overview}</Text>
        </View>
    )
}