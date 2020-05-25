import axios from "axios";

const genresSource = {
  getGenres: () => axios.get("/genres.json"),
}

export default genresSource;