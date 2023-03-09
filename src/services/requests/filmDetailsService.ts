import api from "../api";

export async function filmDetailsService(idFilm) {
    try {
        const resultado = await api.get(`movie/${idFilm}`, {
            params: {
                api_key: "a81f256628352a57fc50c3593588644f",
                language: "pt-BR",
            }
        });
        return resultado.data
    }
    catch (error) {
        console.log('Movies Details Service: ', error)
        return {}
    }
}