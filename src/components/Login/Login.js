import React from 'react';
import logo from '../../images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import useFormWithValidation from '../../utils/useFormWithValidation';

function Login(props) {
  const history = useHistory();
  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation({email: '', password: ''});

  React.useEffect(() => {
    props.setError(false);
  }, [history]);

  function handleSubmit(e) {
    e.preventDefault();
    const {email, password} = values;
    props.handleSubmit(email, password);
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
          <span className={`login__submit-error ${props.isError ? '' : 'login__submit-error_hidden'}`} id="login-error">{props.isError.message ? props.isError.message : 'При попытке авторизации произошла ошибка.'}</span>
          <button className={`login__submit ${isValid ? '' : 'login__submit_disabled'}`} type={isValid ? 'submit' : 'button'}>Войти</button>
        </form>
        <p className="login__signup">Ещё не зарегистрированы?<Link to="/signup" className="login__signup-link">Регистрация</Link></p>
      </div>
    </section>
  );
}
  
export default Login;