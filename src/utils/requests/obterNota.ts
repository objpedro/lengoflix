import apiImdb from "../apiImdb";

export async function filmDetailsService(imdbId: string) {
    try {
        const resultado = await apiImdb.get(`movie/${imdbId}`);
        return resultado.data
    }
    catch (error) {
        console.log(error)
        return {}
    }
}