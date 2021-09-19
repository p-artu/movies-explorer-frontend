import React from 'react';
import './SearchForm.css';
import useFormWithValidation from '../../utils/useFormWithValidation';

function SearchForm(props) {
  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation({key: ''});
  const [searchError, setsearchError] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      setsearchError('');
      props.handleSubmit(values.key);
    } else if (values.key.length > 0) {
      setsearchError(errors.key);
    } else {
      setsearchError('Нужно ввести ключевое слово');
    }
  }

  return (
    <div className="searchform">
      <form className="searchform__container" onSubmit={handleSubmit} noValidate>
        <input value={values.key} onChange={handleChange} name="key" autoComplete="off" id="key-input" type="text" className="searchform__input" placeholder="Фильм" minLength="1" maxLength="60" required/>
        <span className="searchform__error" id="key-input-error">
          {searchError}
        </span>
        <button className="searchform__submit" type="submit">Найти</button>
      </form>
    </div>
  );
}
  
export default SearchForm;