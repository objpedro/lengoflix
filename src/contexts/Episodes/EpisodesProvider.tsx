import React, { useState } from "react";
import { EpisodesContext } from "./EpisodesContex";
import { Episode } from "../../dto/domain/Episode";
import ProviderResult from "../../dto/contexts/providerResult";
import { IEpisodesProvider } from "../../dto/contexts/iEpisodesProvider";
import { episodesService } from "../../services/requests/episodesService";

export function EpisodesProvider(props) {
    const [episodes, setEpisodes] = useState<Episode>([]);
    const [load, setLoad] = useState<boolean>(false);

    const EpisodesValue: IEpisodesProvider = {
        load,
        setLoad,
        episodes,
        setEpisodes,
        getEpisodes: async (idSerie: number, idSeason: number) => {
            setLoad(true);
            let ret: ProviderResult = null;
            const requestResult = await episodesService(idSerie, idSeason)
            if (requestResult) {
                setEpisodes(requestResult);
                // console.log("Episodes Provider Sucesso: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: true
                },
                    setLoad(false);
            } else {
                console.log("Episodes Provider Erro: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: false,
                    mensagemErro: requestResult
                }
                setLoad(false);
            }
            return ret
        },
    }

    return (
        <EpisodesContext.Provider value={EpisodesValue}>
            {props.children}
        </EpisodesContext.Provider>
    )
}