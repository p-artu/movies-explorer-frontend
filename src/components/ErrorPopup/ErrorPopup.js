import './ErrorPopup.css';

function ErrorPopup() {
  return (
    <div className='error'>
      <div className="error__container">
        <h2 className="error__status">404</h2>
        <p className="error__message">Страница не найдена</p>
        <button type="button" aria-label="Выход" className="error__exit">Назад</button>
      </div>
    </div>
  );
}

export default ErrorPopup;