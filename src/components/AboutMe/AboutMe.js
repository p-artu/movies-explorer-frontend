import avatar from '../../images/avatar.png';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__container">
        <div className="aboutme__text-container">
          <p className="aboutme__name">Виталий</p>
          <p className="aboutme__job">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ.
            У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
            начал заниматься фриланс-заказами и ушёл с постоянной работы.
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