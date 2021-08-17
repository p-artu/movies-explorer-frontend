import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul class="portfolio__list">
        <li className="portfolio__list-item">
          <a href="https://p-artu.github.io/how-to-learn/index.html" target="_blank" className="portfolio__link" rel="noreferrer">Статичный сайт</a>
        </li>
        <li className="portfolio__list-item">
          <a href="https://p-artu.github.io/russian-travel/index.html" target="_blank" className="portfolio__link" rel="noreferrer">Адаптивный сайт</a>
        </li>
        <li className="portfolio__list-item">
          <a href="https://p-artu.praktikum.students.nomoredomains.rocks" target="_blank" className="portfolio__link" rel="noreferrer">Одностраничное приложение</a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;