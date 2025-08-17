import React, { useState } from 'react';
import { MovieDetailsContext } from './MovieDetailsContex';
import { Movie } from '../../dto/domain/Movie';
import { Review } from '../../dto/domain/Review';
import ProviderResult from '../../dto/contexts/providerResult';
import { IMovieDetailsProvider } from '../../dto/contexts/iMovieDetailsProvider';
import { filmDetailsService } from '../../services/requests/filmDetailsService';
import { movieReviewsService } from '../../services/requests/movieReviewsService';

export function MovieDetailsProvider(props) {
  const [movieDetails, setMovieDetails] = useState<Movie>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [load, setLoad] = useState<boolean>(false);

  const MovieDetailsValue: IMovieDetailsProvider = {
    load,
    setLoad,
    movieDetails,
    setMovieDetails,
    reviews,
    setReviews,
    getMovieDetails: async (idFilme: number) => {
      setLoad(true);
      let ret: ProviderResult = null;
      const requestResult = await filmDetailsService(idFilme);
      if (requestResult) {
        console.log('Movie Provider Sucesso: ', requestResult);
        setMovieDetails(requestResult);
        (ret = {
          ...ret,
          sucesso: true,
        }),
          setLoad(false);
      } else {
        console.log('Movie Provider Sucesso: ', requestResult);
        ret = {
          ...ret,
          sucesso: false,
          mensagemErro: requestResult,
        };
        setLoad(false);
      }
      return ret;
    },
    getReviews: async (idFilme: number) => {
      setLoad(true);
      let ret: ProviderResult = null;
      const requestResult = await movieReviewsService(idFilme);
      if (requestResult) {
        console.log('Review Provider Sucesso: ', requestResult);
        setReviews(requestResult);
        (ret = {
          ...ret,
          sucesso: true,
        }),
          setLoad(false);
      } else {
        console.log('Review Provider Sucesso: ', requestResult);
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
    <MovieDetailsContext.Provider value={MovieDetailsValue}>
      {props.children}
    </MovieDetailsContext.Provider>
  );
}
