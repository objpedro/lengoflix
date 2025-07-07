import { Movie } from "../domain/Movie";
import ProviderResult from "./providerResult";

interface IMovieProvider {
    //Listagem de Filmes
    listaFilmes: Movie[];
    setListaFilmes: (filme: Movie[]) => void;
    movieUpcoming: (page: number) => Promise<ProviderResult>;

    listTopRated: Movie[];
    setListTopRated: (movie: Movie[]) => void;
    movieTopRated: (page: number) => Promise<ProviderResult>;

    listPopular: Movie[];
    setListPopular: (movie: Movie[]) => void;
    moviePopular: (page: number) => Promise<ProviderResult>;


    //Loading
    // page: number,
    // setPage: (p: number) => void;
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { IMovieProvider }