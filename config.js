
const CONFIG = (function(){
  let api_key = "7826b828b8971b2adc0e3801578e24c7";

  return {
    "configUrl": "https://api.themoviedb.org/3/configuration?api_key=" + api_key,
    "popularMovies": "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=" + api_key,
    "upcomingMovies": "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=" + api_key,
    "movieDetails": "https://api.themoviedb.org/3/movie/MOVIE_ID?language=en-US&page=1&api_key=" + api_key,
    "searchUrl": "http://api.themoviedb.org/3/search/movie?language=en-US&page=1&api_key=" + api_key
  }
})();