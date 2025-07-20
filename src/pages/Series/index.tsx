import React, { useContext, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { CustomList } from '../../components/CustomList/CustomList';
import { SeriesContext } from '../../contexts/Series/SeriesContext';
import colors from '../../utils/color';

export function Series() {
  const serieContext = useContext(SeriesContext);

  useEffect(() => {
    serieContext.getPopular(1);
    serieContext.getAiringToday(1);
    serieContext.getOnTheAir(1);
    serieContext.getTopRated(1);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.preto,
        paddingVertical: 30,
      }}
    >
      <ScrollView>
        <CustomList
          typeShow={'tv'}
          movieList={serieContext.airingTodayList}
          listName={'Estreias do Dia'}
          functionName={'airingToday'}
          searchData={''}
        />
          <CustomList
            typeShow={'tv'}
            movieList={serieContext.onTheAirList}
            listName={'No Ar'}
            functionName={'onTheAir'}
            searchData={''}
          />
        <CustomList
          typeShow={'tv'}
          movieList={serieContext.popularList}
          listName={'Populares'}
          functionName={'popular'}
          searchData={''}
        />
        <CustomList
          typeShow={'tv'}
          movieList={serieContext.topRatedList}
          listName={'Mais bem avaliadas'}
          functionName={'topRated'}
          searchData={''}
        />
      </ScrollView>
    </View>
  );
}
