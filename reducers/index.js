/* jshint esversion:6 */
import { ADD_DECK } from '../actions';

const initialState = {
};

export default function decks (state = initialState, action) {
  switch (action.type) {
    case ADD_DECK:
      console.log('ADD', action.deck);
      return Object.assign({}, state,
        {[action.title]: {
          title: action.title,
          questions: []
        }}
      );
    default:
      return state;
  }
}
