import React from 'react';
import { useHistory } from 'react-router-dom';
import './Profile.css';
import useFormWithValidation from '../../utils/useFormWithValidation';
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';

function Profile(props) {
  const history = useHistory();
  const currentUser = React.useContext(CurrentUserContext);
  const {
    values, handleChange, errors,
  } = useFormWithValidation({name: currentUser.name, email: currentUser.email});
  const [isEdited, setIsEdited] = React.useState(false);
  const [hasChanges, setHasChanges] = React.useState(false);

  React.useEffect(() => {
    if (props.isError) {
      setIsEdited(true);
      document.querySelector('.profile__save-submit').setAttribute('disabled', 'disabled');
    }
  }, [props.isError]);
  React.useEffect(() => {
    setHasChanges(!(values.name === currentUser.name) || !(values.email === currentUser.email));
  }, [values.name, values.email]);
  React.useEffect(() => {
    setIsEdited(false);
    document.querySelector('.profile__save-submit').removeAttribute('disabled');
    props.setError(false);
  }, [history]);

  function handleEdit() {
    setIsEdited(true);
    setHasChanges(false);
    document.querySelector('#name-input').removeAttribute('disabled');
    document.querySelector('#email-input').removeAttribute('disabled');
  }
  function handleSubmit(e) {
    e.preventDefault();
    const {email, name} = values;
    props.handleSubmit(email, name);
    setIsEdited(false);
    document.querySelector('#name-input').setAttribute('disabled', 'disabled');
    document.querySelector('#email-input').setAttribute('disabled', 'disabled');
  }

  return (
    <section className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет,&nbsp;<p className="profile__name">{`${currentUser.name}!`}</p></h1>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <ul className="profile__list">
            <li className="profile__list-item">
              <p className="profile__input-title">Имя</p>
              <input value={values.name} onChange={handleChange} name="name" autoFocus autoComplete="off" id="name-input" type="text" className={`profile__input ${errors.name ? 'profile__input_type_error' : ''}`} minLength="2" maxLength="40" placeholder="латиница, кириллица, пробел или дефис" required disabled/>
              <span className="profile__error" id="name-input-error">{errors.name}</span>
            </li>
            <li className="profile__list-item">
              <p className="profile__input-title">E-mail</p>
              <input value={values.email} onChange={handleChange} name="email"autoComplete="off" id="email-input" type="email" className={`profile__input ${errors.email ? 'profile__input_type_error' : ''}`} minLength="2" maxLength="40" required disabled/>
              <span className="profile__error" id="email-input-error">{errors.email}</span>
            </li>
          </ul>
          <span className={`profile__submit-success ${(props.isSuccess && !isEdited) ? '' : 'profile__submit-success_hidden'}`} id="profile-success">Ваш профиль успешно обновился!</span>
          <span className={`profile__submit-error ${props.isError ? '' : 'profile__submit-error_hidden'}`} id="profile-error">{props.isError.message ? props.isError.message : 'При обновлении профиля произошла ошибка.'}</span>
          <button onClick={handleEdit} className={`profile__submit ${isEdited ? 'profile__submit_hidden' : ''}`} type="button">Редактировать</button>
          <button className={`profile__save-submit ${isEdited ? '' : 'profile__save-submit_hidden'} ${(props.isError || errors.name || errors.email || !hasChanges) ? 'profile__save-submit_disabled' : ''}`} type={(props.isError || errors.name || errors.email || !hasChanges) ? 'button' : 'submit'}>Сохранить</button>
        </form>
        <button onClick={props.signOut} className={`profile__exit ${isEdited ? 'profile__exit_hidden' : ''}`} type="button">Выйти из аккаунта</button>
      </div>
    </section>
  );
}
  
export default Profile;