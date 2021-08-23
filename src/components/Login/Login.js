import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <Link to={'/'} className="login__logo">
          <img className="login__logo-image" alt="Логотип" src={logo} />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" noValidate>
          <p className="login__input-title">E-mail</p>
          <input name="email"autoComplete="off" id="email-input" type="email" className="login__input" minLength="2" maxLength="40" required/>
          <span className="login__error" id="email-input-error">Что-то пошло не так...</span>
          <p className="login__input-title">Пароль</p>
          <input name="password" autoComplete="off" id="password-input" type="password" className="login__input" minLength="2" maxLength="40" required/>
          <span className="login__error" id="password-input-error">Что-то пошло не так...</span>
          <button className="login__submit" type="submit">Войти</button>
        </form>
        <p className="login__signup">Ещё не зарегистрированы?<Link to="/signup" className="login__signup-link">Регистрация</Link></p>
      </div>
    </section>
  );
}
  
export default Login;