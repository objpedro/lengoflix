import api from "../api";

export async function lancamentosService() {
    try {
        const resultado = await api.get(`movie/now_playing`, {
            params: {
                api_key: "a81f256628352a57fc50c3593588644f",
                language: "pt-BR",
                page: 1
            }
        });
        return resultado.data.results
    }
    catch (error) {
        console.log(error)
        return {}
    }
}