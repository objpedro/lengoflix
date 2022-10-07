import React, { useState } from "react";
import { FilmeContext } from "./FilmeContext";
import { IFilmeProvider } from "../../dto/contexts/iFilmeProvider";
import { Filme } from "../../dto/domain/Filme";
import ProviderResult from "../../dto/contexts/providerResult";
import { lancamentosService } from "../../services/requests/lancamentosService";
import { filtrarFilmeService } from "../../services/requests/filtrarFilmeService";

export function FilmeProvider(props) {
    const [listaFilmes, setListaFilmes] = useState<Filme[]>([]);
    const [listaFilmesFiltrados, setListaFilmesFiltrados] = useState<Filme[]>([])
    const [load, setLoad] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const FilmesProviderValue: IFilmeProvider = {
        load,
        setLoad,
        page,
        setPage,
        listaFilmes,
        setListaFilmes,
        listaFilmesFiltrados,
        setListaFilmesFiltrados,
        listarFilmes: async () => {
            setLoad(true)
            let ret: ProviderResult = null;
            const requestResult = await lancamentosService(page);
            if (requestResult) {
                setListaFilmes([...listaFilmes, ...requestResult]);
                setListaFilmesFiltrados([...listaFilmesFiltrados, ...requestResult]);
                setPage(page + 1);
                ret = {
                    ...ret,
                    sucesso: true
                };
                setLoad(false)
            } else {
                ret = {
                    ...ret,
                    sucesso: false,
                    mensagemErro: requestResult
                }
                setLoad(false);
            }
            return ret;
        },
        listarFilmesFiltrados: async (tituloFilme: string) => {
            setLoad(true)
            let ret: ProviderResult = null;
            const requestResult = await filtrarFilmeService(tituloFilme);
            if (requestResult) {
                setListaFilmesFiltrados(requestResult);
                console.log("Lista Filmes Filtrados Sucesso: ", requestResult)
                ret = {
                    ...ret,
                    sucesso: true
                };
                setLoad(false);
            } else {
                console.log("Lista Filmes Filtrados Falha: ", requestResult)
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
