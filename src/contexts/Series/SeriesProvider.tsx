import React, { useState } from "react";
import { SeriesContext } from "./SeriesContext";
import { ISeriesProvider } from "../../dto/contexts/ISeriesProvider";
import { Serie } from "../../dto/domain/Serie";
import ProviderResult from "../../dto/contexts/providerResult";
import { seriesService } from "../../services/requests/seriesService";

export function SeriesProvider(props) {
    const [listaSeries, setListaSeries] = useState<Serie[]>([]);
    const [load, setLoad] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const SeriesProviderValue: ISeriesProvider = {
        load,
        setLoad,
        page,
        setPage,
        listaSeries,
        setListaSeries,
        obterSeries: async () => {
            console.log("Cheguei até aqui");

            setLoad(true)
            let ret: ProviderResult = null;
            const requestResult = await seriesService(page);
            if (requestResult) {
                setListaSeries([...listaSeries, ...requestResult]);
                console.log("Series Provider Sucesso: ", requestResult);
                setPage(page + 1);
                ret = {
                    ...ret,
                    sucesso: true
                };
                setLoad(false)
            } else {
                console.log("Series Provider Erro: ", requestResult);
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
        <SeriesContext.Provider value={SeriesProviderValue}>
            {props.children}
        </SeriesContext.Provider>
    )
}
