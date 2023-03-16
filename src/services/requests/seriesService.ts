import api from "../api";

export async function seriesService(view: string, page: number) {
    try {
        const resultado = await api.get(`tv/${view}`, {
            params: {
                api_key: "a81f256628352a57fc50c3593588644f",
                language: "pt-BR",
                page: page,
            }
        });
        return resultado.data.results
    }
    catch (error) {
        console.log('Serie Service: ', error)
        return {}
    }
}