import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {
  return (
    <ul className="moviescardList">
      {props.cards.map(card => (
        <MoviesCard
          card={card}
          isSaved={props.isSaved}
          key={card._id}
        />
      ))}
    </ul>
  );
}
  
export default MoviesCardList;