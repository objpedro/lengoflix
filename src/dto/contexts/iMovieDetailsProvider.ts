import { Movie } from "../domain/Movie";
import ProviderResult from "./providerResult";

interface IMovieDetailsProvider {
    //Listagem de Filmes
    movieDetails: Movie;
    setMovieDetails: (movie: Movie) => void;
    getMovieDetails: (movieId: number) => Promise<ProviderResult>;

    //Loading
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { IMovieDetailsProvider }