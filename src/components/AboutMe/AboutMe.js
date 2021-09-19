import avatar from '../../images/avatar.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__container">
        <div className="aboutme__text-container">
          <p className="aboutme__name">Студент</p>
          <p className="aboutme__job">Фронтенд-разработчик, XX лет</p>
          <p className="aboutme__description">
            Прошёл курс по веб-разработке и уже нашёл работу.
          </p>
          <ul className="aboutme__links">
            <li className="aboutme__link-item">
              <a href="https://www.instagram.com/yndx.praktikum/" target="_blank" className="aboutme__link" rel="noreferrer">Instagram</a>
            </li>
            <li className="aboutme__link-item">
              <a href="https://github.com/p-artu" target="_blank" className="aboutme__link" rel="noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img className="aboutme__avatar" alt="Фотография студента" src={avatar} />
      </div>
      
    </section>
  );
}
  
export default AboutMe;