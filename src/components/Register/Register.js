import logo from '../../images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import './Register.css';
import useFormWithValidation from '../../utils/useFormWithValidation';

function Register(props) {
  const history = useHistory();
  const {
    values, handleChange, errors, isValid,
  } = useFormWithValidation({email: '', password: '', name: ''});

  React.useEffect(() => {
    props.setError(false);
  }, [history]);

  function handleSubmit(e) {
    props.setIsFormSent(true);
    e.preventDefault();
    const {email, password, name} = values;
    props.handleSubmit(email, password, name);
  }

  return (
    <section className="register">
      <div className="register__container">
        <Link to={'/'} className="register__logo">
          <img className="register__logo-image" alt="Логотип" src={logo} />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" onSubmit={handleSubmit} noValidate>
          <p className="register__input-title">Имя</p>
          <input value={values.name} onChange={handleChange} name="name" autoFocus autoComplete="off" id="name-input" type="text" className={`register__input ${errors.name ? 'register__input_type_error' : ''}`} minLength="2" maxLength="40" placeholder="латиница, кириллица, пробел или дефис" required pattern="^[a-zA-Zа-яА-ЯЁё\s\-]+$" disabled={props.isFormSent}/>
          <span className="register__error" id="name-input-error">{errors.name}</span>
          <p className="register__input-title">E-mail</p>
          <input value={values.email} onChange={handleChange} name="email"autoComplete="off" id="email-input" type="email" className={`register__input ${errors.email ? 'register__input_type_error' : ''}`} minLength="2" maxLength="40" required disabled={props.isFormSent}/>
          <span className="register__error" id="email-input-error">{errors.email}</span>
          <p className="register__input-title">Пароль</p>
          <input value={values.password} onChange={handleChange} name="password" autoComplete="off" id="password-input" type="password" className={`register__input ${errors.password ? 'register__input_type_error' : ''}`} minLength="2" maxLength="40" required disabled={props.isFormSent}/>
          <span className="register__error" id="password-input-error">{errors.password}</span>
          <span className={`register__submit-error ${props.isError ? '' : 'register__submit-error_hidden'}`} id="register-error">{props.isError.message ? props.isError.message : 'При попытке регистрации произошла ошибка.'}</span>
          <button className={`register__submit ${(isValid && !props.isFormSent) ? '' : 'register__submit_disabled'}`} type={(isValid && !props.isFormSent) ? 'submit' : 'button'}>Зарегистрироваться</button>
        </form>
        <p className="register__signin">Уже зарегистрированы?<Link to="/signin" className="register__signin-link">Войти</Link></p>
      </div>
    </section>
  );
}
  
export default Register;