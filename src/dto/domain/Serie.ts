import { Genre } from "./Genre"

interface Serie {
    id: number,
    imdb_id: string,
    name: string,
    original_name: string,
    overview: string,
    genres: Genre[],
    backdrop_path: string,
    poster_path: string,
    release_date: string,
    networks: string,
    seasons: number,
}

export { Serie };