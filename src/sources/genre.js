import axios from "axios";

const genreSource = {
  getGenre: ({ id }) => axios.get(`/genres/${id}.json`),
}

export default genreSource;