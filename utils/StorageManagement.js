/* jshint esversion:6 */
import { AsyncStorage } from 'react-native';
import { addDeck } from '../actions';

export function fetchAll () {
  return function fetchAllThunk(dispatch) {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          let key = store[i][0];
          let data = JSON.parse(store[i][1]);
          console.log('key: ', key, 'title ', data.title, ' and questions: ', data.questions.length);
          dispatch(addDeck(data.title));
        });
      });
    });
  };
}

export function submitEntry (entry) {
  return AsyncStorage.setItem(entry, JSON.stringify({
    title: entry,
    questions: []
  }));
}
