import './Profile.css';

function Profile(props) {
  return (
    <section className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет,&nbsp;<p className="profile__name">{`Виталий!`}</p></h1>
        <form className="profile__form" noValidate>
          <ul className="profile__list">
            <li className="profile__list-item">
              <p className="profile__input-title">Имя</p>
              <input name="name" autoFocus autoComplete="off" id="name-input" type="text" className="profile__input" minLength="2" maxLength="40" required/>
              <span className="profile__error" id="name-input-error">dddd</span>
            </li>
            <li className="profile__list-item">
              <p className="profile__input-title">E-mail</p>
              <input name="email"autoComplete="off" id="email-input" type="email" className="profile__input" minLength="2" maxLength="40" required/>
              <span className="profile__error" id="email-input-error">dddd</span>
            </li>
          </ul>
          <span className="profile__submit-error profile__submit-error_hidden" id="profile-error">При обновлении профиля произошла ошибка.</span>
          <button className="profile__submit" type="submit">Редактировать</button>
          <button className="profile__save-submit profile__save-submit_disabled profile__save-submit_hidden" type="submit">Сохранить</button>
        </form>
        <button onClick={props.signOut} className="profile__exit">Выйти из аккаунта</button>
      </div>
    </section>
  );
}
  
export default Profile;