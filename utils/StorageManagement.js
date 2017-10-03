/* jshint esversion:6 */
import { AsyncStorage } from 'react-native';
import { addDeck, removeDeck } from '../actions';

export function fetchAll () {
  return function fetchAllThunk(dispatch) {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          let key = store[i][0];
          let data = JSON.parse(store[i][1]);
          dispatch(addDeck(data.title));
        });
      });
    });
  };
}

export function submitDeck (title) {
  return AsyncStorage.setItem(title, JSON.stringify({
    title: title,
    questions: []
  }));
}

export function removeAll () {
  return function removeAllThunk(dispatch) {
    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiRemove(keys, (err) => {
          keys.map((result, i, store) => {
            let key = store[i][0];
            dispatch(removeDeck(key));
        });
      });
    });
  };
}
