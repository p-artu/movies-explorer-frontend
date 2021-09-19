import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';

function Movies(props) {
  return (
    <section className="movies">
      <SearchForm handleSubmit={props.handleSubmit} />
      <FilterCheckbox handleChange={props.handleChange} />
      <MoviesCardList {...props} isSaved={false} />
      <Preloader isLoading={props.isLoading} />
      <p className={`movies__found-error ${props.isNotFound ? '' : 'movies__found-error_hidden'}`}>
        Ничего не найдено
      </p>
      <p className={`movies__error ${!props.isError && 'movies__error_hidden'}`}>
        Во время запроса произошла ошибка.
        Возможно, проблема с соединением или сервер недоступен.
        Подождите немного и попробуйте ещё раз
      </p>
    </section>
  );
}
  
export default Movies;