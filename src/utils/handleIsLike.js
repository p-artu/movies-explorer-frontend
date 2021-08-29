function handleIsLike(card, savedCardsId) {
  if (card.id) {
    return savedCardsId.some(el => el === card.id)
  }
};

export default handleIsLike;
