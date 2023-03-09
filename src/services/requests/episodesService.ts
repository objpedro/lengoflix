import api from "../api";

export async function episodesService(idSerie: number, idSeason: number) {
    try {
        const resultado = await api.get(`tv/${idSerie}/season/${idSeason}`, {
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