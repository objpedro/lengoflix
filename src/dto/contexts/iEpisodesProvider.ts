import { Episode } from "../domain/Episode";
import ProviderResult from "./providerResult";

interface IEpisodesProvider {
    episodes: Episode;
    setEpisodes: (episode: Episode) => void;
    getEpisodes: (idSerie: number, idSeason: number) => Promise<ProviderResult>;

    //Loading
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { IEpisodesProvider }