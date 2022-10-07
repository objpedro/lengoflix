import { Filme } from "../domain/Filme";
import ProviderResult from "./providerResult";

interface IFilmeProvider {
    //Listagem de Filmes
    listaFilmes: Filme[];
    setListaFilmes: (filme: Filme[]) => void;
    listarFilmes: () => Promise<ProviderResult>;

    //Filtrar filmes
    listaFilmesFiltrados: Filme[];
    setListaFilmesFiltrados: (filme: Filme[]) => void;
    listarFilmesFiltrados: (tituloFilme: string) => Promise<ProviderResult>;

    //Loading
    page: number,
    setPage: (p: number) => void;
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { IFilmeProvider }