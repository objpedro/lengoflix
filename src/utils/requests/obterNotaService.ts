import apiImdb from "../apiImdb";

export async function obterNotaService(imdbId: string) {
    try {
        const resultado = await apiImdb.get(imdbId);
        return resultado.data
    }
    catch (error) {
        console.log(error)
        return {}
    }
}