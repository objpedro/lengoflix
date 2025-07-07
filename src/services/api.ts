import axios from "axios";

const api = axios.create({
    //https://api.themoviedb.org/3/movie/movie/now_playing?api_key=fb2d3106275f3bb91465fda027eeb0b0&language=pt-BR
    //https://image.tmdb.org/t/p/original/
    baseURL: "https://api.themoviedb.org/3/"
})

export default api;