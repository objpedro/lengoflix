import { Movie } from "../domain/Movie";
import ProviderResult from "./providerResult";

interface IFiltroProvider {
    //Filtrar filmes
    listaFilmesFiltrados: Movie[];
    setListaFilmesFiltrados: (filme: Movie[]) => void;
    listarFilmesFiltrados: (tituloFilme: string) => Promise<ProviderResult>;
    getTitlesPages: (tituloFilme: string, page: number) => Promise<ProviderResult>;

    //Loading
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { IFiltroProvider }