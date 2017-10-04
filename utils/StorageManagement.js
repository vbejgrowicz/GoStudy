/* jshint esversion:6 */
import { AsyncStorage } from 'react-native';
import { addDeck, addCard, removeDeck } from '../actions';

export function fetchAll () {
  return function fetchAllThunk(dispatch) {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          const data = JSON.parse(store[i][1]);
          dispatch(addDeck(data.title));
          const questions = data.questions;
          questions.map((res) => {
            const question = res.question;
            const answer = res.answer;
            dispatch(addCard(data.title, question, answer));
          });
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

export function submitCard (deck, question, answer) {
  return AsyncStorage.getItem(deck, (err, result) => {
    const data = JSON.parse(result);
    AsyncStorage.mergeItem(deck,  JSON.stringify({
      questions: data.questions.concat({question, answer})
    }));
  });
}

export function removeAll () {
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
