import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
headers: {
    accept: 'application/json',
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTYxYjA1ZmFhZjI1NzIwZDRhY2Y0NTE0Y2FiOWFkNSIsInN1YiI6IjY1ZjljNGM4Yjg0Y2RkMDE4NjZjMzU5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wkRFf2hz2E84JYpw4KdWZSThOgb1V--AvRUNN0DrbWg"
  },
};

const trendingMovie = async () => {
  const response = await axios.get("trending/movie/day", options);
  return response;
};

async function queryMovie(query) {
  const response = await axios.get(`search/movie?include_adult=false&page=1=${query}`, options);
  return response.data.results;
}

const detailsMovie = async (movieId) => {
  const response = await axios.get(`movie/${movieId}`, options);
  return response.data;
};

const creditsMovie = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits`, options);
  return response.data.cast;
};

const reviewsMovie = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/reviews`, options);
  return response.data;
};

export {
    trendingMovie,
    queryMovie,
    detailsMovie,
    creditsMovie,
    reviewsMovie
};