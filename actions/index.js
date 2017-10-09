export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const REMOVE_DECK = 'REMOVE_DECK';

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  };
}

export function addCard(deck, question, answer) {
  return {
    type: ADD_CARD,
    deck,
    question,
    answer,
  };
}

export function removeDeck(title) {
  return {
    type: REMOVE_DECK,
    title,
  };
}
