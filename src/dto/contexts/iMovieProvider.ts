import { Movie } from "../domain/Movie";
import ProviderResult from "./providerResult";

interface IMovieProvider {
    //Listagem de Filmes
    listaFilmes: Movie[];
    setListaFilmes: (filme: Movie[]) => void;
    listarFilmes: (page: number) => Promise<ProviderResult>;

    //Loading
    // page: number,
    // setPage: (p: number) => void;
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { IMovieProvider }