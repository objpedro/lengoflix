import axios from "axios";

const apiImdb = axios.create({
    baseURL: "https://imdb-api.com/API/Ratings/k_wxrvy45d/"
})

export default apiImdb;