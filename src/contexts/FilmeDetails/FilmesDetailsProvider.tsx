import React, { useState } from "react";
import { FilmeDetailsContext } from "./FilmeDetailsContex";
import { Filme } from "../../dto/domain/Filme";
import ProviderResult from "../../dto/contexts/providerResult";
import { IFilmeDetailsProvider } from "../../dto/contexts/IFilmeDetailsProvider";
import { filmDetailsService } from "../../services/requests/filmDetailsService";

export function FilmeDetailsProvider(props) {
    const [filmeDetails, setFilmeDetails] = useState<Filme>([]);
    const [load, setLoad] = useState<boolean>(false);


    const FilmeDetailsValue: IFilmeDetailsProvider = {
        load,
        setLoad,
        filmeDetails,
        setFilmeDetails,
        listarFilmeDetails: async (idFilme: number) => {
            setLoad(true);
            let ret: ProviderResult = null;
            const requestResult = await filmDetailsService(idFilme)
            if (requestResult) {
                console.log("Filme Details Provider Sucesso: ", requestResult);
                setFilmeDetails(requestResult);
                ret = {
                    ...ret,
                    sucesso: true
                },
                    setLoad(false);
            } else {
                console.log("Filme Details Provider Falha: ", requestResult);
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
        <FilmeDetailsContext.Provider value={FilmeDetailsValue}>
            {props.children}
        </FilmeDetailsContext.Provider>
    )
}