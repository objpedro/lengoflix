import api from "../api";

export async function seriesDetailsService(idSerie: number) {
    try {
        const resultado = await api.get(`tv/${idSerie}`, {
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