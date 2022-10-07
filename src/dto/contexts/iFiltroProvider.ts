import { Filme } from "../domain/Filme";
import ProviderResult from "./providerResult";

interface IFiltroProvider {
    //Filtrar filmes
    listaFilmesFiltrados: Filme[];
    setListaFilmesFiltrados: (filme: Filme[]) => void;
    listarFilmesFiltrados: (tituloFilme: string) => Promise<ProviderResult>;

    //Loading
    load: boolean;
    setLoad: (status: boolean) => void;
}

export { IFiltroProvider }