import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className='not-found'>
      <div className="not-found__container">
        <h2 className="not-found__status">404</h2>
        <p className="not-found__message">Страница не найдена</p>
        <Link to={'/'} className="not-found__exit">Назад</Link>
      </div>
    </div>
  );
}

export default PageNotFound;