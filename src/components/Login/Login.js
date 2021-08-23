import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './Login.css';
import useFormValidation from '../../utils/useFormValidation';

function Login() {
  const {
    values, handleChange, errors, isValid,
  } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="login">
      <div className="login__container">
        <Link to={'/'} className="login__logo">
          <img className="login__logo-image" alt="Логотип" src={logo} />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" onSubmit={handleSubmit} noValidate>
          <p className="login__input-title">E-mail</p>
          <input value={values.email} onChange={handleChange} name="email" autoFocus autoComplete="off" id="email-input" type="email" className={`login__input ${errors.email ? 'login__input_type_error' : ''}`} minLength="2" maxLength="40" required/>
          <span className="login__error" id="email-input-error">{errors.email}</span>
          <p className="login__input-title">Пароль</p>
          <input value={values.password} onChange={handleChange} name="password" autoComplete="off" id="password-input" type="password" className={`login__input ${errors.password ? 'login__input_type_error' : ''}`} minLength="2" maxLength="40" required/>
          <span className="login__error" id="password-input-error">{errors.password}</span>
          <button className={`login__submit ${isValid ? '' : 'login__submit_disabled'}`} type="submit">Войти</button>
        </form>
        <p className="login__signup">Ещё не зарегистрированы?<Link to="/signup" className="login__signup-link">Регистрация</Link></p>
      </div>
    </section>
  );
}
  
export default Login;