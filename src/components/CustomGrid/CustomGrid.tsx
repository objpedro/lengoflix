import React, { useContext, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { MovieContext } from '../../contexts/Movie/MovieContext';
import { SeriesContext } from '../../contexts/Series/SeriesContext';
import { MovieDetailsContext } from '../../contexts/MovieDetails/MovieDetailsContex';
import { SeriesDetailsContext } from '../../contexts/SeriesDetails/SeriesDetailsContex';
import { FiltroContext } from '../../contexts/Filtro/FiltroContext';
import { useNavigation } from '@react-navigation/native';
import { Loading } from '../Loading';
import { styles } from './styles';
import { FlatGrid } from 'react-native-super-grid';
import LinearGradient from 'react-native-linear-gradient';

export function CustomGrid({
  typeShow,
  movieList,
  listName,
  functionName,
  searchData,
}) {
  const movieContext = useContext(MovieContext);
  const serieContext = useContext(SeriesContext);
  const movieDetailsContext = useContext(MovieDetailsContext);
  const seriesDetailsContext = useContext(SeriesDetailsContext);
  const filtroContext = useContext(FiltroContext);
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const gradientColor = [
    'rgba(0,0,0,1)',
    'rgba(0,0,0,0)',
    'rgba(0,0,0,0)',
    'rgba(0,0,0,1)',
  ];

  async function loadContext() {
    if (loading) return;
    setLoading(true);

    try {
      if (typeShow === 'movie') {
        switch (functionName) {
          case 'movieUpcoming':
            await movieContext.getMoviesUpcoming(page + 1);
            break;
          case 'moviePopular':
            await movieContext.getMoviesPopular(page + 1);
            break;
          case 'movieTopRated':
            await movieContext.getMoviesTopRated(page + 1);
            break;
          case 'nowPlaying':
            await movieContext.getMoviesNowPlaying(page + 1);
            break;
          case 'listarFilmesFiltrados':
            await filtroContext.getTitlesPages(searchData, page + 1);
            break;
        }
      } else if (typeShow === 'tv') {
        switch (functionName) {
          case 'airingToday':
            await serieContext.getAiringToday(page + 1);
            break;
          case 'onTheAir':
            await serieContext.getOnTheAir(page + 1);
            break;
          case 'popular':
            await serieContext.getPopular(page + 1);
            break;
          case 'topRated':
            await serieContext.getTopRated(page + 1);
            break;
          case 'listarFilmesFiltrados':
            await filtroContext.getTitlesPages(searchData, page + 1);
            break;
        }
      }
      setPage(page + 1);
    } catch (error) {
      console.error('Erro ao carregar contexto:', error);
    }

    setLoading(false);
  }

  function handlePress(item) {
    const isMovie =
      item.media_type === 'movie' ||
      (item.media_type === undefined && typeShow === 'movie');
    const isSeries =
      item.media_type === 'tv' ||
      (item.media_type === undefined && typeShow === 'tv');

    if (isMovie) {
      movieDetailsContext.getMovieDetails(item.id);
      navigation.navigate('MoviesDetails', { idFilm: item.id });
    } else if (isSeries) {
      seriesDetailsContext.getSeriesDetails(item.id);
      navigation.navigate('SeriesDetails', { idSerie: item.id });
    }
  }

  return (
    <View style={styles.container}>
      {listName && <Text style={styles.header}>{listName}</Text>}
      <LinearGradient
        style={styles.linearGradient}
        colors={gradientColor}
        useAngle={true}
        angle={90}
      >
        <FlatGrid
          data={movieList}
          itemDimension={100}
          spacing={10}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <Image
                style={styles.poster}
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
                }}
              />
            </TouchableOpacity>
          )}
          onEndReached={loadContext}
          onEndReachedThreshold={0.2}
        />
        <Loading size="large" isVisible={loading} />
      </LinearGradient>
    </View>
  );
}
