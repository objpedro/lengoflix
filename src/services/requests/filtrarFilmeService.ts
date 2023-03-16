import api from "../api";

export async function filtrarFilmeService(tituloFilme: string) {
    try {
        const resultado = await api.get(`search/multi`, {
            params: {
                api_key: "a81f256628352a57fc50c3593588644f",
                language: "pt-BR",
                query: `${tituloFilme}`
            }
        });
        return resultado.data.results
    }
    catch (error) {
        console.log('Filter Service: ', error)
        return {}
    }
}