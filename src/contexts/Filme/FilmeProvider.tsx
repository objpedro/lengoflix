import React, { useState } from "react";
import { FilmeContext } from "./FilmeContext";
import { IFilmeProvider } from "../../dto/contexts/iFilmeProvider";
import { Filme } from "../../dto/domain/Filme";
import ProviderResult from "../../dto/contexts/providerResult";
import { lancamentosService } from "../../services/requests/lancamentosService";

export function FilmeProvider(props) {
    const [listaFilmes, setListaFilmes] = useState<Filme[]>([]);
    const [load, setLoad] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const FilmesProviderValue: IFilmeProvider = {
        load,
        setLoad,
        page,
        setPage,
        listaFilmes,
        setListaFilmes,
        listarFilmes: async () => {
            setLoad(true)
            let ret: ProviderResult = null;
            const requestResult = await lancamentosService(page);

            if (requestResult) {
                console.log("Listar Filmes Provider Sucesso: ", requestResult)

                setListaFilmes([...listaFilmes, ...requestResult]);
                setPage(page + 1);

                ret = {
                    ...ret,
                    sucesso: true
                };
                setLoad(false)
            } else {
                console.log("Listar Filmes Provider Falha: ", requestResult)
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
