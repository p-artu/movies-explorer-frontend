import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
// import film1 from '../../images/film1.jpg';
// import film2 from '../../images/film2.jpg';
// import film3 from '../../images/film3.jpg';
// import film4 from '../../images/film4.jpg';
// import film5 from '../../images/film5.jpg';
// import film6 from '../../images/film6.jpg';
// import film7 from '../../images/film7.jpg';

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