import account from '../../images/account.png';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  const {pathname} = useLocation();

  return (
    <div className="navigation">
      <nav className="navigation__links">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <NavLink
              to={'/movies'}
              className={`navigation__link ${pathname === '/' ? 'navigation__link_main' : '' }`}
              activeClassName="navigation__link_active"
            >
              {'Фильмы'}
            </NavLink>
          </li>
          <li className="navigation__list-item">
            <NavLink
              to={'/saved-movies'}
              className={`navigation__link ${pathname === '/' ? 'navigation__link_main' : '' }`}
              activeClassName="navigation__link_active"
            >
              {'Сохранённые фильмы'}
            </NavLink>
          </li>
        </ul>
        <NavLink
          to={'/profile'}
          className="navigation__link-account"
          activeClassName="navigation__link-account_active"
        >
          <p className={`navigation__link-account-text ${pathname === '/' ? 'navigation__link-account-text_main' : '' }`}>Аккаунт</p>
          <div className="navigation__link-account-box">
            <img className="navigation__link-account-image" alt="Значок профиля" src={account} />
          </div>
        </NavLink>
      </nav>
      <button type="button" aria-label="Меню" className="navigation__menu" onClick={props.onOpen}></button>
    </div>
  );
}
  
export default Navigation;