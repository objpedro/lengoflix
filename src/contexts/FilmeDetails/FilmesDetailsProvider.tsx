import React, { useState } from "react";
import { FilmeDetailsContext } from "./FilmeDetailsContex";
import { Nota } from "../../dto/domain/Nota";
import { Filme } from "../../dto/domain/Filme";
import ProviderResult from "../../dto/contexts/providerResult";
import { IFilmeDetailsProvider } from "../../dto/contexts/IFilmeDetailsProvider";
import { filmDetailsService } from "../../services/requests/filmDetailsService";
import { getRatingService } from "../../utils/ratingRequest/getRatingService";

export function FilmeDetailsProvider(props) {
    const [filmeDetails, setFilmeDetails] = useState<Filme>([]);
    const [nota, setNota] = useState<Nota>('');
    const [load, setLoad] = useState<boolean>(false);

    const FilmeDetailsValue: IFilmeDetailsProvider = {
        load,
        setLoad,
        nota,
        setNota,
        filmeDetails,
        setFilmeDetails,
        listarFilmeDetails: async (idFilme: number) => {
            setLoad(true);
            let ret: ProviderResult = null;
            const requestResult = await filmDetailsService(idFilme)
            if (requestResult) {
                setFilmeDetails(requestResult);
                ret = {
                    ...ret,
                    sucesso: true
                },
                    setLoad(false);
            } else {
                ret = {
                    ...ret,
                    sucesso: false,
                    mensagemErro: requestResult
                }
                setLoad(false);
            }
            return ret
        },
        listarNotas: async (imdbId: string) => {
            setLoad(true);
            let ret: ProviderResult = null;
            const requestResult = await getRatingService(imdbId)
            if (requestResult) {
                // console.log("Notas Provider Sucesso: ", requestResult);
                setNota(requestResult);
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
        <FilmeDetailsContext.Provider value={FilmeDetailsValue}>
            {props.children}
        </FilmeDetailsContext.Provider>
    )
}