import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function SavedMovies(props) {
  return (
    <section className="savemovies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList {...props} isSaved={true} />
    </section>
  );
}
  
export default SavedMovies;