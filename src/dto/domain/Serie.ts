import { Genre } from "./Genre"
import { Network } from "./Network"
import { Season } from "./Season";
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
    networks: Network[],
    number_of_seasons: number,
    seasons: Season[],
}

export { Serie };