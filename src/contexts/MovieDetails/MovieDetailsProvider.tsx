import React, { useState } from "react";
import { MovieDetailsContext } from "./MovieDetailsContex";
import { Review } from "../../dto/domain/Review";
import { Movie } from "../../dto/domain/Movie";
import ProviderResult from "../../dto/contexts/providerResult";
import { IMovieDetailsProvider } from "../../dto/contexts/iMovieDetailsProvider";
import { filmDetailsService } from "../../services/requests/filmDetailsService";
import { getRatingService } from "../../utils/ratingRequest/getRatingService";

export function MovieDetailsProvider(props) {
    const [movieDetails, setMovieDetails] = useState<Movie>([]);
    const [review, setReview] = useState<Review>('');
    const [load, setLoad] = useState<boolean>(false);

    const MovieDetailsValue: IMovieDetailsProvider = {
        load,
        setLoad,
        review,
        setReview,
        movieDetails,
        setMovieDetails,
        getMovieDetails: async (idFilme: number) => {
            setLoad(true);
            let ret: ProviderResult = null;
            const requestResult = await filmDetailsService(idFilme)
            if (requestResult) {
                // console.log("Movie Provider Sucesso: ", requestResult);
                setMovieDetails(requestResult);
                ret = {
                    ...ret,
                    sucesso: true
                },
                    setLoad(false);
            } else {
                console.log("Movie Provider Sucesso: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: false,
                    mensagemErro: requestResult
                }
                setLoad(false);
            }
            return ret
        },
        getReviews: async (imdbId: string) => {
            setLoad(true);
            let ret: ProviderResult = null;
            const requestResult = await getRatingService(imdbId)
            if (requestResult) {
                // console.log("Notas Provider Sucesso: ", requestResult);
                setReview(requestResult);
                ret = {
                    ...ret,
                    sucesso: true
                },
                    setLoad(false);
            } else {
                console.log("Notas Provider Falha: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: false,
                    mensagemErro: requestResult
                }
                setLoad(false);
            }
            return ret
        }
    }

    return (
        <MovieDetailsContext.Provider value={MovieDetailsValue}>
            {props.children}
        </MovieDetailsContext.Provider>
    )
}