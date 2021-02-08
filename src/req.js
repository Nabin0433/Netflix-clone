const API_KEY = "dbd6bd8300398ba289a05f5b756f7043";

const reqs = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRate: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
//https://api.themoviedb.org/3/discover/movie?api_key=dbd6bd8300398ba289a05f5b756f7043&with_genres=10749


export default reqs;