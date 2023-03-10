import React, { useState } from "react";
import { FilmeContext } from "./FilmeContext";
import { IFilmeProvider } from "../../dto/contexts/iFilmeProvider";
import { Filme } from "../../dto/domain/Filme";
import ProviderResult from "../../dto/contexts/providerResult";
import { lancamentosService } from "../../services/requests/lancamentosService";

export function FilmeProvider(props) {
    const [listaFilmes, setListaFilmes] = useState<Filme[]>([]);
    const [load, setLoad] = useState<boolean>(false);

    const FilmesProviderValue: IFilmeProvider = {
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
        <FilmeContext.Provider value={FilmesProviderValue}>
            {props.children}
        </FilmeContext.Provider>
    )
}
