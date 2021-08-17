import './AboutProject.css';

function AboutProject() {
  return (
    <section className="aboutaroject" id="aboutproject">
      <h2 className="aboutaroject__title">О проекте</h2>
      <div className="aboutaroject__texts">
        <p className="aboutaroject__subtitle">Дипломный проект включал 5 этапов</p>
        <p className="aboutaroject__subtitle">На выполнение диплома ушло 5 недель</p>
        <p className="aboutaroject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="aboutaroject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="aboutaroject__scale">
        <div className="aboutaroject__scale-back">
          <p className="aboutaroject__scale-text">1 неделя</p>
        </div>
        <div className="aboutaroject__scale-front">
          <p className="aboutaroject__scale-text">4 недели</p>
        </div>
        <p className="aboutaroject__scale-title">Back-end</p>
        <p className="aboutaroject__scale-title">Front-end</p>
      </div>
    </section>
  );
}
  
export default AboutProject;