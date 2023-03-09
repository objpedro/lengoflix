import React, { useState } from "react";
import { SeriesDetailsContext } from "./SeriesDetailsContex";
import { Serie } from "../../dto/domain/Serie";
import { Episode } from "../../dto/domain/Episode";
import ProviderResult from "../../dto/contexts/providerResult";
import { ISeriesDetailsProvider } from "../../dto/contexts/iSeriesDetailsProvider";
import { seriesDetailsService } from "../../services/requests/seriesDetailsService";
import { episodesService } from "../../services/requests/episodesService";

export function SeriesDetailsProvider(props) {
    const [seriesDetails, setSeriesDetails] = useState<Serie>([]);
    const [episodes, setEpisodes] = useState<Episode>([]);
    const [load, setLoad] = useState<boolean>(false);

    const SeriesDetailsValue: ISeriesDetailsProvider = {
        load,
        setLoad,
        seriesDetails,
        setSeriesDetails,
        episodes,
        setEpisodes,
        getSeriesDetails: async (idSerie: number) => {
            setLoad(true);
            let ret: ProviderResult = null;
            const requestResult = await seriesDetailsService(idSerie)
            if (requestResult) {
                setSeriesDetails(requestResult);
                // console.log("Series Details Provider Sucesso: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: true
                },
                    setLoad(false);
            } else {
                console.log("Series Details Provider Erro: ", requestResult);
                ret = {
                    ...ret,
                    sucesso: false,
                    mensagemErro: requestResult
                }
                setLoad(false);
            }
            return ret
        },
        getEpisodes: async (idSerie: number, idSeason: number) => {
            setLoad(true);
            let ret: ProviderResult = null;
            const requestResult = await episodesService(idSerie, idSeason)
            if (requestResult) {
                setEpisodes(requestResult);
                console.log("Episodes Provider Sucesso: ", idSerie, idSeason);
                console.log("Episodes Provider Sucesso: ", requestResult);
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
        <SeriesDetailsContext.Provider value={SeriesDetailsValue}>
            {props.children}
        </SeriesDetailsContext.Provider>
    )
}