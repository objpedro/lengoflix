import { Serie } from "../domain/Serie";
import ProviderResult from "./providerResult";

interface ISeriesProvider {
    //Listagem de Series
    listaSeries: Serie[];
    setListaSeries: (serie: Serie[]) => void;
    obterSeries: () => Promise<ProviderResult>;

    //Loading
    page: number,
    setPage: (p: number) => void;
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { ISeriesProvider }