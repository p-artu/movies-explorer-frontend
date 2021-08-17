import './MoviesCard.css';

function MoviesCard(props) {
  const cardLikeButtonClassName = `moviescard__like ${props.card.isLiked ? 'moviescard__like_active' : ''}`;

  return (
    <li className="moviescard">
      <div className="moviescard__container">
        <h2 className="moviescard__title">{props.card.title}</h2>
        <p className="moviescard__time">{props.card.time}</p>
        <button type="button" aria-label={props.isSaved ? 'Удалить' : 'Лайк'} className={props.isSaved ? 'moviescard__trash' : cardLikeButtonClassName}></button>
      </div>
      <img className="moviescard__image" alt="Изображение фильма" src={props.card.image} />
    </li>
  );
}
  
export default MoviesCard;