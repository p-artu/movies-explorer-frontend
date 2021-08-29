import {ShortFilmDuration} from '../utils/constants.js';

function searchMovies(movies, keyWord, isShort) {
  if (movies.length) {
    if (movies[0].owner) {
      return movies.filter(movie => {
        return movie.nameRU.toLowerCase().includes(keyWord.toLowerCase()) && (movie.duration > (isShort ? 0 : ShortFilmDuration))
      });
    } else {
      return movies.filter(movie => {
        return movie.nameRU.toLowerCase().includes(keyWord.toLowerCase())
      });
    }
  }
};

export default searchMovies;