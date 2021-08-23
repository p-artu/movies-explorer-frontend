import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';

function Movies(props) {
  return (
    <section className="movies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList {...props} isSaved={false} />
      <Preloader isLoading={false} />
      <button type="button" aria-label="Ещё" className="movies__button">Ещё</button>
    </section>
  );
}
  
export default Movies;