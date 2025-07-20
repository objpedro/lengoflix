import React, { useContext, useEffect, useState } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
  SafeAreaView,
  View,
} from 'react-native';
import { getUserInfo } from '../../services/requests/getUserInfo';
import { CustomList } from '../../components/CustomList/CustomList';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { MovieContext } from '../../contexts/Movie/MovieContext';

export function Movies() {
  const movieContext = useContext(MovieContext);
  const navigation = useNavigation();
  // const userInfo = await getUserInfo(sessionId);

  useEffect(() => {
    movieContext.getMoviesUpcoming(1);
    movieContext.getMoviesTopRated(1);
    movieContext.getMoviesPopular(1);
    movieContext.getMoviesNowPlaying(1);
  }, []);

  return (
    <View style={styles.nameUserContainer}>
      {/* {userInfo ? (
        <Text>
          Olá, ${userInfo.name || userInfo.username} o que vamos assistir hoje?
        </Text>
      ) : (
        <Text>Olá!</Text>
      )} */}
      <ScrollView>
        <CustomList
          typeShow={'movie'}
          movieList={movieContext.nowPlayingList}
          listName={'Nos Cinemas'}
          functionName={'nowPlaying'}
          searchData={''}
        />
        <CustomList
          typeShow={'movie'}
          movieList={movieContext.listPopular}
          listName={'Em Alta'}
          functionName={'moviePopular'}
          searchData={''}
        />
        <CustomList
          typeShow={'movie'}
          movieList={movieContext.listTopRated}
          listName={'Aclamados pela Crítica'}
          functionName={'movieTopRated'}
          searchData={''}
        />
        <CustomList
          typeShow={'movie'}
          movieList={movieContext.listaFilmes}
          listName={'Lançamentos'}
          functionName={'movieUpcoming'}
          searchData={''}
        />
      </ScrollView>
    </View>
  );
}
