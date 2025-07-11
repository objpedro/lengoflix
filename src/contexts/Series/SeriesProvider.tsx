import React, { useState } from 'react';
import { SeriesContext } from './SeriesContext';
import { ISeriesProvider } from '../../dto/contexts/ISeriesProvider';
import { Serie } from '../../dto/domain/Serie';
import ProviderResult from '../../dto/contexts/providerResult';
import { seriesService } from '../../services/requests/seriesService';

export function SeriesProvider(props) {
  const [popularList, setPopular] = useState<Serie[]>([]);
  const [airingTodayList, setAiringToday] = useState<Serie[]>([]);
  const [onTheAirList, setOnTheAir] = useState<Serie[]>([]);
  const [topRatedList, setTopRated] = useState<Serie[]>([]);

  const [load, setLoad] = useState<boolean>(false);

  const SeriesProviderValue: ISeriesProvider = {
    load,
    setLoad,
    popularList,
    setPopular,
    airingTodayList,
    setAiringToday,
    onTheAirList,
    setOnTheAir,
    topRatedList,
    setTopRated,
    getPopular: async (page: number) => {
      setLoad(true);
      let ret: ProviderResult = {
        sucesso: false,
        mensagemErro: '',
        mensagemSucesso: '',
      };
      const requestResult = await seriesService(page, 'popular');
      if (requestResult) {
        setPopular([...popularList, ...requestResult]);
        // console.log("Series Provider Sucesso: ", requestResult);
        ret = {
          ...ret,
          sucesso: true,
        };
        setLoad(false);
      } else {
        console.log('Series Provider Erro: ', requestResult);
        ret = {
          ...ret,
          sucesso: false,
          mensagemErro: requestResult,
        };
        setLoad(false);
      }
      return ret;
    },
    getAiringToday: async (page: number) => {
      setLoad(true);
      let ret: ProviderResult = {
        sucesso: false,
        mensagemErro: '',
        mensagemSucesso: '',
      };
      const requestResult = await seriesService(page, 'airing_today');
      if (requestResult) {
        setAiringToday([...airingTodayList, ...requestResult]);
        // console.log("Series Provider Sucesso: ", requestResult);
        ret = {
          ...ret,
          sucesso: true,
        };
        setLoad(false);
      } else {
        console.log('Series Provider Erro: ', requestResult);
        ret = {
          ...ret,
          sucesso: false,
          mensagemErro: requestResult,
        };
        setLoad(false);
      }
      return ret;
    },
    getOnTheAir: async (page: number) => {
      setLoad(true);
      let ret: ProviderResult = {
        sucesso: false,
        mensagemErro: '',
        mensagemSucesso: '',
      };
      const requestResult = await seriesService(page, 'on_the_air');
      if (requestResult) {
        setOnTheAir([...onTheAirList, ...requestResult]);
        // console.log("Series Provider Sucesso: ", requestResult);
        ret = {
          ...ret,
          sucesso: true,
        };
        setLoad(false);
      } else {
        console.log('Series Provider Erro: ', requestResult);
        ret = {
          ...ret,
          sucesso: false,
          mensagemErro: requestResult,
        };
        setLoad(false);
      }
      return ret;
    },
    getTopRated: async (page: number) => {
      setLoad(true);
      let ret: ProviderResult = {
        sucesso: false,
        mensagemErro: '',
        mensagemSucesso: '',
      };
      const requestResult = await seriesService(page, 'top_rated');
      if (requestResult) {
        setTopRated([...topRatedList, ...requestResult]);
        // console.log("Series Provider Sucesso: ", requestResult);
        ret = {
          ...ret,
          sucesso: true,
        };
        setLoad(false);
      } else {
        console.log('Series Provider Erro: ', requestResult);
        ret = {
          ...ret,
          sucesso: false,
          mensagemErro: requestResult,
        };
        setLoad(false);
      }
      return ret;
    },
  };

  return (
    <SeriesContext.Provider value={SeriesProviderValue}>
      {props.children}
    </SeriesContext.Provider>
  );
}
