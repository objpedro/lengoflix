import { Serie } from "../domain/Serie";
import { Episode } from "../domain/Episode";
import ProviderResult from "./providerResult";
import { EpisodeList } from "../domain/EpisodeList";

interface ISeriesDetailsProvider {
    seriesDetails: Serie;
    setSeriesDetails: (serie: Serie) => void;
    getSeriesDetails: (idSerie: number) => Promise<ProviderResult>;

    //Episodes
    episodes: EpisodeList;
    setEpisodes: (episodeList: EpisodeList) => void;
    getEpisodes: (idSerie: number, idSeason: number) => Promise<ProviderResult>;

    //Loading
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { ISeriesDetailsProvider }