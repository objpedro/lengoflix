import React, { useContext } from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from './styles';
import { MovieDetailsContext } from '../../contexts/MovieDetails/MovieDetailsContex';
import LinearGradient from 'react-native-linear-gradient';
import { RunTime } from '../../components/Runtime/Runtime';
import { DateFormat } from '../../components/DateFormat/DateFormat';
import { Loading } from '../../components/Loading';
import { Review } from '../../components/Review/Review';
import colors from '../../utils/color';

const gradientColor = [
  'rgba(0, 23, 31,0.0)',
  'rgba(0, 23, 31,0.6)',
  'rgba(0, 23, 31,0.7)',
  'rgba(0, 23, 31,0.9)',
  'rgba(0, 23, 31,1)',
];

export function MoviesDetails() {
  const { load, movieDetails } = useContext(MovieDetailsContext);

  if (load) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.textLoading}>Carregando...</Text>
        <Loading size="large" isVisible />
      </View>
    );
  }

  const {
    backdrop_path,
    title,
    runtime,
    genres,
    original_title,
    vote_average,
    release_date,
    tagline,
    overview,
  } = movieDetails;

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.poster}
        source={{
          uri: `https://image.tmdb.org/t/p/original/${backdrop_path}`,
        }}
      >
        <LinearGradient colors={gradientColor} style={styles.linearGradient}>
          <View style={styles.genresContainer}>
            <Text style={styles.tituloDoFilme}>{title}</Text>
            <View style={styles.runTimeContainer}>
              <RunTime runtime={runtime} />
              <FlatList
                data={genres}
                horizontal
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                  <Text style={styles.genres}> • {item.name}</Text>
                )}
              />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.containerContent}>
        <View style={styles.divider} />

        <Text style={styles.tituloOriginal}>
          Título original: {original_title}
        </Text>

        <View style={styles.containerInfo}>
          <View style={styles.releaseDateContainer}>
            <View style={styles.voteAverageContainer}>
              <Image
                source={require('../../assets/the_movie_db_logo.png')}
                style={styles.tmdbLogo}
              />
              <Review review={vote_average} />
            </View>
            <DateFormat date={release_date} />
          </View>
        </View>

        <View style={styles.divider} />

        {tagline && <Text style={styles.tagline}>''{tagline}''</Text>}

        {overview ? (
          <>
            <Text style={styles.tituloDoFilme}>Sinopse</Text>
            <View style={styles.overviewContainer}>
              <ScrollView>
                <Text style={styles.descricao}>{overview}</Text>
              </ScrollView>
            </View>
          </>
        ) : (
          <Text style={styles.tituloDoFilme}>
            Não foi encontrada a sinopse do filme
          </Text>
        )}
      </View>
    </View>
  );
}
