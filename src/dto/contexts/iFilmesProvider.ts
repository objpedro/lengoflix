import { Filme } from "../domain/Filme";
import ProviderResult from "./providerResult";

interface iFilmeProvider {
    //Listagem de vagas
    // listaVagas: Vaga[];
    // listaVagasFiltradas: Vaga[];
    // setListaVagasFiltradas: (vagas: Vaga[]) => void;
    // setListaVagas: (vagas: Vaga[]) => void;
    // listarVagas: () => Promise<ProviderResult>;
    // //Candidatar Vagas
    // candidatar: (id_vaga: number, cpf: string) => Promise<ProviderResult>;
    // //Loading
    // setLoad: (status: boolean) => void;
    // load: boolean;

    //Listagem de vagas
    listaFilmes: Filme[];
    listaFilmesFiltradas: Filme[];
    setListaFilmes: (filme: Filme[]) => void;
    setListaFilmesFiltradas: (filme: Filme[]) => void;
    listarVagas: () => Promise<ProviderResult>;

    //Loading
    setLoad: (status: boolean) => void;
    load: boolean;
}

export { iFilmeProvider }