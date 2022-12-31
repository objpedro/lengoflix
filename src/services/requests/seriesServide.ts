import api from "../api";

export async function seriesService() {
    try {
        const resultado = await api.get(`tv/airing_today`, {
            params: {
                api_key: "a81f256628352a57fc50c3593588644f",
                language: "pt-BR",
            }
        });
        return resultado.data
    }
    catch (error) {
        console.log(error)
        return {}
    }
}