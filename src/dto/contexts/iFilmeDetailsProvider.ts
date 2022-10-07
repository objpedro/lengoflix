import { Filme } from "../domain/Filme";
import ProviderResult from "./providerResult";

interface IFilmeDetailsProvider {
    //Listagem de Filmes
    filmeDetails: Filme;
    setFilmeDetails: (filme: Filme) => void;
    listarFilmeDetails: (idFilme: number) => Promise<ProviderResult>;

    //Loading
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { IFilmeDetailsProvider }