import { Serie } from "../domain/Serie";
import ProviderResult from "./providerResult";

interface ISeriesProvider {
    //Listagem de Series
    listaSeries: Serie[];
    setListaSeries: (serie: Serie[]) => void;
    obterSeries: (page: number) => Promise<ProviderResult>;

    //Loading
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { ISeriesProvider }