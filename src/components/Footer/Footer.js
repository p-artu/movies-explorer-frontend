import { useLocation } from 'react-router-dom'
import './Footer.css';

function Footer() {
  const {pathname} = useLocation();

  return (
    <footer className={`footer ${(pathname === '/profile' || pathname === '/signup' || pathname === '/signin') ? 'footer_hidden' : ''}`}>
      <div className="footer__flex-container">
        <p className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__container">
          <p className="footer__copyright">&copy; 2020</p>
          <ul className="footer__links">
            <li className="footer__links-item">
              <a href="https://practicum.yandex.ru/" target="_blank" className="footer__link" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__links-item">
              <a href="https://github.com/p-artu" target="_blank" className="footer__link" rel="noreferrer">Github</a>
            </li>
            <li className="footer__links-item">
              <a href="https://www.instagram.com/yndx.praktikum/" target="_blank" className="footer__link" rel="noreferrer">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
  
export default Footer;