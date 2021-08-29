import './MoviesCard.css';
import handleIsLike from '../../utils/handleIsLike';
import {HourDuration} from '../../utils/constants.js';

function MoviesCard(props) {
  let isLiked = handleIsLike(props.card, props.savedCardsId);
  const cardLikeButtonClassName = `moviescard__like ${isLiked ? 'moviescard__like_active' : ''}`;
  const hours = Math.trunc(props.card.duration/HourDuration);
  const minutes = props.card.duration%HourDuration;
  const time = `${hours>0 ? hours+'ч ' : ''}${minutes>0 ? minutes+'м' : ''}`;
  const trailer = `${props.isSaved ? props.card.trailer : props.card.trailerLink}`;

  function handleSaveMovie() {
    if (props.isSaved) {
      props.deleteMovie(props.card);
    } else {
      if (isLiked) {
        props.deleteMovie(props.card);
      } else {
        props.handleSaveMovie(props.card);
      }
    }
  }

  return (
    <li className="moviescard">
      <div className="moviescard__container">
        <h2 className="moviescard__title">{props.card.nameRU}</h2>
        <p className="moviescard__time">{time}</p>
        <button onClick={handleSaveMovie} type="button" aria-label={props.isSaved ? 'Удалить' : 'Лайк'} className={props.isSaved ? 'moviescard__trash' : cardLikeButtonClassName}></button>
      </div>
      <a href={trailer.startsWith('https') ? trailer : 'https://www.youtube.com'} target="_blank" className="moviescard__link" rel="noreferrer">
        <img className="moviescard__image" alt="Изображение фильма" src={props.isSaved ? props.card.image : `https://api.nomoreparties.co${props.card.image.url}`} />
      </a>
    </li>
  );
}
  
export default MoviesCard;