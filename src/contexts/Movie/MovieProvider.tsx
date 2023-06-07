import React, { useState } from "react";
import { MovieContext } from "./MovieContext";
import { IMovieProvider } from "../../dto/contexts/iMovieProvider";
import { Movie } from "../../dto/domain/Movie";
import ProviderResult from "../../dto/contexts/providerResult";
import { tmdbService } from "../../services/requests/tmdbService";

export function MovieProvider(props) {
    const [listaFilmes, setListaFilmes] = useState<Movie[]>([]);
    const [listTopRated, setListTopRated] = useState<Movie[]>([]);
    const [listPopular, setListPopular] = useState<Movie[]>([]);
    const [load, setLoad] = useState<boolean>(false);

    const MovieProviderValue: IMovieProvider = {
        load,
        setLoad,
        listaFilmes,
        setListaFilmes,
        listTopRated,
        setListTopRated,
        listPopular,
        setListPopular,
        movieUpcoming: async (page: number) => {
            setLoad(true)
            let ret: ProviderResult = null;
            const requestResult = await tmdbService(page, '/upcoming');
            if (requestResult) {
                setListaFilmes([...listaFilmes, ...requestResult]);
                // console.log("Movie Provider Sucesso: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: true
                };
                setLoad(false)
            } else {
                console.log("Movie Provider Erro: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: false,
                    mensagemErro: requestResult
                }
                setLoad(false);
            }
            return ret;
        },
        movieTopRated: async (page: number) => {
            setLoad(true)
            let ret: ProviderResult = null;
            const requestResult = await tmdbService(page, '/top_rated');
            if (requestResult) {
                setListTopRated([...listTopRated, ...requestResult]);
                // console.log("Movie Provider Sucesso: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: true
                };
                setLoad(false)
            } else {
                console.log("Movie Provider Erro: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: false,
                    mensagemErro: requestResult
                }
                setLoad(false);
            }
            return ret;
        },
        moviePopular: async (page: number) => {
            setLoad(true)
            let ret: ProviderResult = null;
            const requestResult = await tmdbService(page, '/popular');
            if (requestResult) {
                setListPopular([...listPopular, ...requestResult]);
                // console.log("Movie Provider Sucesso: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: true
                };
                setLoad(false)
            } else {
                console.log("Movie Provider Erro: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: false,
                    mensagemErro: requestResult
                }
                setLoad(false);
            }
            return ret;
        },
    }

    return (
        <MovieContext.Provider value={MovieProviderValue}>
            {props.children}
        </MovieContext.Provider>
    )
}
