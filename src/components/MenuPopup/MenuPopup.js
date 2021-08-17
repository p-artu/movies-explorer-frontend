import account from '../../images/account.png';
import './MenuPopup.css';
import { Link, useLocation } from 'react-router-dom';

function MenuPopup(props) {
  const {pathname} = useLocation();

  return (
    <div className={`menu ${props.isOpen ? 'menu_opened' : ''}`}>
      <div className="menu__container">
        <button type="button" aria-label="Выход" className="menu__exit" onClick={props.onClose}></button>
        <ul className="menu__list">
          <li className={`menu__list-item ${(pathname === '/') ? 'menu__list-item_checked' : ''}`}>
            <Link
              to={'/'}
              className="menu__link"
            >
              {'Главная'}
            </Link>
          </li>
          <li className={`menu__list-item ${(pathname === '/movies') ? 'menu__list-item_checked' : ''}`}>
            <Link
              to={'/movies'}
              className="menu__link"
            >
              {'Фильмы'}
            </Link>
          </li>
          <li className={`menu__list-item ${(pathname === '/saved-movies') ? 'menu__list-item_checked' : ''}`}>
            <Link
              to={'/saved-movies'}
              className="menu__link"
            >
              {'Сохранённые фильмы'}
            </Link>
          </li>
        </ul>
        <Link
          to={'/profile'}
          className={`menu__link-account ${(pathname === '/profile') ? 'menu__link-account_checked' : ''}`}
        >
          {'Аккаунт'}
          <div className="menu__link-account-box">
            <img className="menu__link-account-image" alt="Значок профиля" src={account} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MenuPopup;