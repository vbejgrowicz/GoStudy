import { AsyncStorage } from 'react-native';
import { removeDeck } from '../actions';

export function fetchAll() {
  return AsyncStorage.getAllKeys().then(keys =>
    AsyncStorage.multiGet(keys));
}


export function submitDeck(title) {
  return AsyncStorage.setItem(title, JSON.stringify({
    title,
    questions: [],
  }));
}

export function submitCard(deck, question, answer) {
  return AsyncStorage.getItem(deck, (err, result) => {
    const data = JSON.parse(result);
    AsyncStorage.mergeItem(deck, JSON.stringify({
      questions: data.questions.concat({ question, answer }),
    }));
  });
}

export function removeAll() {
  return function removeAllThunk(dispatch) {
    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiRemove(keys, (err) => {
          keys.map((result, i, store) => {
            let key = store[i];
            dispatch(removeDeck(key));
        });
      });
    });
  };
}
