import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList(props) {
  const [batchLength, setBatchLength] = React.useState(0);
  const [batchLengthMore, setBatchLengthMore] = React.useState(0);
  const [size, setSize] = React.useState(document.documentElement.clientWidth);
  let timer;

  React.useEffect(() => {
    window.addEventListener('resize', measureResizing);
    return () => {
      window.removeEventListener('resize', measureResizing);
    }
  });
  React.useEffect(() => {
    if (size > 600) {
      if (batchLength > 4) {
        setBatchLength(batchLength);
      } else {
        setBatchLength(4);
      }
      setBatchLengthMore(1);
    } else {
      if (batchLength > 5) {
        setBatchLength(batchLength);
      } else {
        setBatchLength(5);
      }
      setBatchLengthMore(2);
    }
  }, [props.cards, size]);

  function measureResizing() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => setSize(document.documentElement.clientWidth), 2000);
  };
  function handleMore() {
    setBatchLength(batchLength + batchLengthMore);
  }

  return (
    <div className="moviescardList">
      <ul className="moviescardList__list">
        {(props.cards === 'NotFound') ? '' :
        (props.isSaved ?
          props.cards.map(card => (
            <MoviesCard
              card={card}
              isSaved={props.isSaved}
              key={card._id}
            />
          )) :
        props.cards.reduce((filmsBatch, card) => {
          if (filmsBatch.length < batchLength) {
            filmsBatch.push(
              <MoviesCard
                card={card}
                isSaved={props.isSaved}
                key={props.isSaved ? card._id : card.id}
                handleSaveMovie={props.handleSaveMovie}
                savedCardsId={props.savedCardsId}
                deleteMovie={props.deleteMovie}
              />
            );
          }
          return filmsBatch
        }, []))}
      </ul>
      {
        (!props.isSaved)
        && <button onClick={handleMore} type="button" aria-label="Ещё" className={`moviescardList__button ${(props.cards.length <= batchLength) ? 'moviescardList__button_hidden' : ''}`}>Ещё</button>
      }
      
    </div>
  );
}

export default MoviesCardList;