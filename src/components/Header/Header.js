import logo from '../../images/logo.png';
import Navigation from '../Navigation/Navigation.js';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  const {pathname} = useLocation();

  return (
    <header className={
      `header
      ${(pathname === '/signup' || pathname === '/signin') ? 'header_hidden' : ''}
      ${(pathname === '/') ? 'header_background' : ''}`
    }>
      <div className={`header__container`}>
        <Link to={'/'} className="header__logo">
          <img className="header__logo-image" alt="Логотип" src={logo} />
        </Link>
        {
        !props.loggedIn ? (
          <div className="header__links">
            <Link
              to={'/signup'}
              className="header__link"
            >
              {'Регистрация'}
            </Link>
            <Link
              to={'/signin'}
              className="header__link header__link_button"
            >
              {'Войти'}
            </Link>
          </div>
        ) : (
          <Navigation onOpen={props.onOpen} />
        )
        }
      </div>
    </header>
  );
}
  
export default Header;