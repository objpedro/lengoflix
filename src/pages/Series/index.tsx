import React, { useContext, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
// import { CustomList } from './components/CustomList';
import { CustomList } from '../../components/CustomList/CustomList';
import { SeriesContext } from '../../contexts/Series/SeriesContext';

export function Series() {
  const serieContext = useContext(SeriesContext);

  useEffect(() => {
    serieContext.getPopular(1);
    serieContext.getAiringToday(1);
    serieContext.getOnTheAir(1);
    serieContext.getTopRated(1);
  }, []);

  return (
    <ScrollView>
      <CustomList
        typeShow={'tv'}
        movieList={serieContext.popularList}
        listName={'Populares'}
        functionName={'popular'}
        searchData={''}
      />
      <CustomList
        typeShow={'tv'}
        movieList={serieContext.airingTodayList}
        listName={'Em alta hoje'}
        functionName={'airingToday'}
        searchData={''}
      />
      <CustomList
        typeShow={'tv'}
        movieList={serieContext.topRatedList}
        listName={'Mais bem avaliados'}
        functionName={'topRated'}
        searchData={''}
      />
    </ScrollView>
  );
}
