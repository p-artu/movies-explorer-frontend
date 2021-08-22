import './SearchForm.css';

function SearchForm() {
  return (
    <div className="searchform">
      <form className="searchform__container">
        <input name="searchall" autoComplete="off" id="searchall-input" type="text" className="searchform__input" placeholder="Фильм" minLength="2" maxLength="60" required/>
        <button className="searchform__submit" type="submit">Найти</button>
      </form>
    </div>
  );
}
  
export default SearchForm;