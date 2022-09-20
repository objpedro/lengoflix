// interface Filme {
//     id_vaga: number;
//     titulo: string;
//     status_vaga: string;
//     vagas_abertas: number;
//     numeroInscritoVaga: number;
//     inscrito: boolean;
//     descricao: string;
// }

// export { Filme };

interface Filme {
    id_filme: number,
    imdb_id: number,
    titulo: string,
    descricao: string,
    genero: [
        {
            id: number,
            name: string
        }
    ]
    poster: string,
    tagline: string,
    data_lancamento: string
}

export { Filme };