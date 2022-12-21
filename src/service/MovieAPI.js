import axios from 'axios';
const getMovies = async (page) => {
  let response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      page: page
    }
  });

  return response.data.results;
}

const getMovieDetails = async (id) => {
  let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    }
  });

  return response.data;
};

const MovieApi = {
  getMovies, getMovieDetails
};

export default MovieApi;