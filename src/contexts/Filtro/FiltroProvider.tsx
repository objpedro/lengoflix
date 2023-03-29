import React, { useState } from "react";
import { Movie } from "../../dto/domain/Movie";
import { IFiltroProvider } from "../../dto/contexts/iFiltroProvider";
import ProviderResult from "../../dto/contexts/providerResult";
import { filtrarFilmeService } from "../../services/requests/filtrarFilmeService";
import { FiltroContext } from "./FiltroContext";

export function FiltroProvider(props) {
    const [listaFilmesFiltrados, setListaFilmesFiltrados] = useState<Movie[]>([])
    const [load, setLoad] = useState<boolean>(false);

    const FiltroPropsValue: IFiltroProvider = {
        load,
        setLoad,
        listaFilmesFiltrados,
        setListaFilmesFiltrados,
        listarFilmesFiltrados: async (tituloFilme: string) => {
            setLoad(true);
            let ret: ProviderResult = null;
            const requestResult = await filtrarFilmeService(tituloFilme, 1);
            if (requestResult) {
                setListaFilmesFiltrados(requestResult);
                // console.log("Lista Filmes Filtrados Sucesso: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: true
                };
                setLoad(false);
            } else {
                console.log("Lista Filmes Filtrados Falha: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: false,
                    mensagemErro: requestResult
                };
                setLoad(false);
            }
            return ret;
        },
        getTitlesPages: async (tituloFilme: string, page: number) => {
            setLoad(true);
            let ret: ProviderResult = null;
            const requestResult = await filtrarFilmeService(tituloFilme, page);
            if (requestResult) {
                setListaFilmesFiltrados([...listaFilmesFiltrados, ...requestResult]);
                // console.log("Lista Filmes Filtrados Por Página Sucesso: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: true
                };
                setLoad(false);
            } else {
                console.log("Lista Filmes Filtrados Por Página Falha: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: false,
                    mensagemErro: requestResult
                };
                setLoad(false);
            }
            return ret;
        },
    }

    return (
        <FiltroContext.Provider value={FiltroPropsValue}>
            {props.children}
        </FiltroContext.Provider>
    )
}