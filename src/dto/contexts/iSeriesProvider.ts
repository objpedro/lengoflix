import { Serie } from '../domain/Serie';
import ProviderResult from './providerResult';

interface ISeriesProvider {
  //Listagem de Series
  popularList: Serie[];
  setPopular: (serie: Serie[]) => void;
  getPopular: (page: number) => Promise<ProviderResult>;

  airingTodayList: Serie[];
  setAiringToday: (serie: Serie[]) => void;
  getAiringToday: (page: number) => Promise<ProviderResult>;

  onTheAirList: Serie[];
  setOnTheAir: (serie: Serie[]) => void;
  getOnTheAir: (page: number) => Promise<ProviderResult>;

  topRatedList: Serie[];
  setTopRated: (serie: Serie[]) => void;
  getTopRated: (page: number) => Promise<ProviderResult>;

  //Loading
  load: boolean;
  setLoad: (status: boolean) => void;
}

export type { ISeriesProvider };
