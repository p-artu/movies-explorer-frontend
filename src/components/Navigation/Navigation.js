import account from '../../images/account.png';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const {pathname} = useLocation();

  return (
    <div className="navigation">
      <nav className="navigation__links">
        <ul className="navigation__list">
          <li className="navigation__list-item">
            <Link
              to={'/movies'}
              className={`navigation__link ${(pathname === '/movies') ? 'navigation__link_active' : ''}`}
            >
              {'Фильмы'}
            </Link>
          </li>
          <li className="navigation__list-item">
            <Link
              to={'/saved-movies'}
              className={`navigation__link ${(pathname === '/saved-movies') ? 'navigation__link_active' : ''}`}
            >
              {'Сохранённые фильмы'}
            </Link>
          </li>
        </ul>
        <Link
          to={'/profile'}
          className="navigation__link-account"
        >
          {'Аккаунт'}
          <div className="navigation__link-account-box">
            <img className="navigation__link-account-image" alt="Значок профиля" src={account} />
          </div>
        </Link>
      </nav>
      <button type="button" aria-label="Меню" className="navigation__menu"></button>
    </div>
  );
}
  
export default Navigation;