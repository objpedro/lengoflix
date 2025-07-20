import { Movie } from '../domain/Movie';
import ProviderResult from './providerResult';

interface IMovieProvider {
  //Listagem de Filmes
  listaFilmes: Movie[];
  setListaFilmes: (filme: Movie[]) => void;
  getMoviesUpcoming: (page: number) => Promise<ProviderResult>;

  listTopRated: Movie[];
  setListTopRated: (movie: Movie[]) => void;
  getMoviesTopRated: (page: number) => Promise<ProviderResult>;

  listPopular: Movie[];
  setListPopular: (movie: Movie[]) => void;
  getMoviesPopular: (page: number) => Promise<ProviderResult>;

  nowPlayingList: Movie[];
  setNowPlayingList: (filme: Movie[]) => void;
  getMoviesNowPlaying: (page: number) => Promise<ProviderResult>;

  //Loading
  // page: number,
  // setPage: (p: number) => void;
  load: boolean;
  setLoad: (status: boolean) => void;
}

export { IMovieProvider };
