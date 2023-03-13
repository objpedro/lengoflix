import { Movie } from "../domain/Movie";
import { Review } from "../domain/Review";
import ProviderResult from "./providerResult";

interface IMovieDetailsProvider {
    //Listagem de Filmes
    movieDetails: Movie;
    setMovieDetails: (movie: Movie) => void;
    getMovieDetails: (movieId: number) => Promise<ProviderResult>;

    // Reviews
    review: Review;
    setReview: (review: Review) => void;
    getReviews: (imdbId: string) => Promise<ProviderResult>;

    //Loading
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { IMovieDetailsProvider }