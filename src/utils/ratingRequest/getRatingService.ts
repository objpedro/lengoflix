import apiImdb from "./apiImdb";

export async function getRatingService(imdbId: string) {
    try {
        const resultado = await apiImdb.get(imdbId);
        return resultado.data
    }
    catch (error) {
        console.log(error)
        return {}
    }
}