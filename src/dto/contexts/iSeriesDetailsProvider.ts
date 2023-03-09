import { Serie } from "../domain/Serie";
import { Episode } from "../domain/Episode";
import ProviderResult from "./providerResult";

interface ISeriesDetailsProvider {
    seriesDetails: Serie;
    setSeriesDetails: (serie: Serie) => void;
    getSeriesDetails: (idSerie: number) => Promise<ProviderResult>;

    //Episodes
    episodes: Episode;
    setEpisodes: (episode: Episode) => void;
    getEpisodes: (idSerie: number, idSeason: number) => Promise<ProviderResult>;

    //Loading
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { ISeriesDetailsProvider }