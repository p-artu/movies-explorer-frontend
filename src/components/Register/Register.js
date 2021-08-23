import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <Link to={'/'} className="register__logo">
          <img className="register__logo-image" alt="Логотип" src={logo} />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" noValidate>
          <p className="register__input-title">Имя</p>
          <input name="name" autoFocus autoComplete="off" id="name-input" type="text" className="register__input register__input_type_error" minLength="2" maxLength="40" required/>
          <span className="register__error" id="name-input-error">Что-то пошло не так...</span>
          <p className="register__input-title">E-mail</p>
          <input name="email"autoComplete="off" id="email-input" type="email" className="register__input" minLength="2" maxLength="40" required/>
          <span className="register__error" id="email-input-error">Что-то пошло не так...</span>
          <p className="register__input-title">Пароль</p>
          <input name="password" autoComplete="off" id="password-input" type="password" className="register__input" minLength="2" maxLength="40" required/>
          <span className="register__error" id="password-input-error">Что-то пошло не так...</span>
          <button className="register__submit" type="submit">Зарегистрироваться</button>
        </form>
        <p className="register__signin">Уже зарегистрированы?<Link to="/signin" className="register__signin-link">Войти</Link></p>
      </div>
    </section>
  );
}
  
export default Register;