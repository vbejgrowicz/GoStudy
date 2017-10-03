/* jshint esversion:6 */
export const ADD_DECK = "ADD_DECK";
export const REMOVE_DECK = "REMOVE_DECK";

export function addDeck (title) {
  return {
    type: ADD_DECK,
    title,
  };
}

export function removeDeck (title) {
  return {
    type: REMOVE_DECK,
    title,
  };
}
