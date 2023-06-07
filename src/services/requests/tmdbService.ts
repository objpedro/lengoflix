import api from "../api";

export async function tmdbService(page: number, view: string) {
    try {
        const resultado = await api.get(`/movie${view}`, {
            params: {
                api_key: "a81f256628352a57fc50c3593588644f",
                language: "pt-BR",
                page: page
            }
        });
        return resultado.data.results
    }
    catch (error) {
        console.log('Now Playing Service: ', error)
        return {}
    }
}