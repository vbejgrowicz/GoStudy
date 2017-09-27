/* jshint esversion:6 */
import { RECEIVE_DECKS, ADD_DECK } from '../actions';

const initialState = {
};

export default function decks (state = initialState, action) {
  switch (action.type) {
    case ADD_DECK:
      console.log('ADD', action.deck);
      return Object.assign({}, state,
        {[action.deck]: {
          title: action.deck,
          questions: []
        }}
      );
    default:
      return state;
  }
}
