import React, { useState } from "react";
import { MovieContext } from "./MovieContext";
import { IMovieProvider } from "../../dto/contexts/iMovieProvider";
import { Movie } from "../../dto/domain/Movie";
import ProviderResult from "../../dto/contexts/providerResult";
import { lancamentosService } from "../../services/requests/lancamentosService";

export function MovieProvider(props) {
    const [listaFilmes, setListaFilmes] = useState<Movie[]>([]);
    const [load, setLoad] = useState<boolean>(false);

    const MovieProviderValue: IMovieProvider = {
        load,
        setLoad,
        listaFilmes,
        setListaFilmes,
        listarFilmes: async (page: number) => {
            setLoad(true)
            let ret: ProviderResult = null;
            const requestResult = await lancamentosService(page);
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
        }
    }

    return (
        <MovieContext.Provider value={MovieProviderValue}>
            {props.children}
        </MovieContext.Provider>
    )
}
