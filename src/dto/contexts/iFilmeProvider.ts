import { Filme } from "../domain/Filme";
import ProviderResult from "./providerResult";

interface IFilmeProvider {

    //Listagem de vagas
    listaFilmes: Filme[];
    listaFilmesFiltradas: Filme[];
    setListaFilmes: (filme: Filme[]) => void;
    setListaFilmesFiltradas: (filme: Filme[]) => void;
    listarFilmes: () => Promise<ProviderResult>;

    //Loading
    setLoad: (status: boolean) => void;
    load: boolean;
}

export { IFilmeProvider }