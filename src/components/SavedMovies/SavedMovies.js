import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies(props) {
  return (
    <section className="savemovies">
      <SearchForm handleSubmit={props.handleSubmit} />
      <FilterCheckbox handleChange={props.handleChange} isSaved={true} />
      <MoviesCardList {...props} isSaved={true} />
      <p className={`savemovies__found-error ${(props.cards === 'NotFound') ? '' : 'savemovies__found-error_hidden'}`}>
        Ничего не найдено
      </p>
    </section>
  );
}
  
export default SavedMovies;