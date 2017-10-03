/* jshint esversion:6 */
import { ADD_DECK, REMOVE_DECK } from '../actions';

const initialState = {
};

export default function decks (state = initialState, action) {
  switch (action.type) {
    case ADD_DECK:
      return Object.assign({}, state,
        {[action.title]: {
          title: action.title,
          questions: []
        }}
      );
    case REMOVE_DECK:
      return Object.keys(state).reduce((result, key) => {
          if (key !== action.title) {
              result[key] = state[key];
          }
          return result;
        }, {});
    default:
      return state;
  }
}
