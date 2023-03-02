import api from "../api";

export async function seriesService(page) {
    try {
        const resultado = await api.get(`tv/popular`, {
            params: {
                api_key: "a81f256628352a57fc50c3593588644f",
                language: "pt-BR",
                page: page,
            }
        });
        return resultado.data.results
    }
    catch (error) {
        console.log(error)
        return {}
    }
}