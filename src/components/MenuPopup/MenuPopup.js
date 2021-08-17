import './MenuPopup.css';

function MenuPopup() {
  return (
    <div className='menu'>
      <div className="menu__container">
        <h2 className="menu__status">404</h2>
        <p className="menu__message">Страница не найдена</p>
        <button type="button" aria-label="Выход" className="menu__exit">Назад</button>
      </div>
    </div>
  );
}

export default MenuPopup;