import { Genre } from "./Genre"

interface Movie {
    id: number,
    imdb_id: string,
    title: string,
    original_title: string,
    genres: Genre[],
    overview: string,
    backdrop_path: string,
    poster_path: string,
    release_date: string,
    runtime: number,
    vote_average: number,
}

export { Movie };