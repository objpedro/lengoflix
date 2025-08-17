import { Movie } from '../domain/Movie';
import { Review } from '../domain/Review';
import ProviderResult from './providerResult';

interface IMovieDetailsProvider {
  //Listagem de Filmes
  movieDetails: Movie;
  setMovieDetails: (movie: Movie) => void;
  getMovieDetails: (movieId: number) => Promise<ProviderResult>;

  //Reviews
  reviews: Review[];
  setReviews: (review: Review[]) => void;
  getReviews: (reviewId: number) => Promise<ProviderResult>;

  //Loading
  load: boolean;
  setLoad: (status: boolean) => void;
}

export type { IMovieDetailsProvider };
