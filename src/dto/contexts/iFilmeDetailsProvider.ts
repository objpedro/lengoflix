import { Filme } from "../domain/Filme";
import { Nota } from "../domain/Nota";
import ProviderResult from "./providerResult";

interface IFilmeDetailsProvider {
    //Listagem de Filmes
    nota: Nota;
    setNota: (nota: Nota) => void;
    filmeDetails: Filme;
    setFilmeDetails: (filme: Filme) => void;
    listarFilmeDetails: (idFilme: number) => Promise<ProviderResult>;
    listarNotas: (imdbId: string) => Promise<ProviderResult>;

    //Loading
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { IFilmeDetailsProvider }