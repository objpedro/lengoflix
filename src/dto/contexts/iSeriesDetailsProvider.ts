import { Serie } from "../domain/Serie";
import ProviderResult from "./providerResult";

interface ISeriesDetailsProvider {
    seriesDetails: Serie;
    setSeriesDetails: (serie: Serie) => void;
    getSeriesDetails: (idSerie: number) => Promise<ProviderResult>;

    //Loading
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { ISeriesDetailsProvider }