import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';
import { removeDeck } from '../actions';

const NOTIFICATION_KEY = 'Flashcards:Notifications';
const DECK_KEY = 'Flashcards:Decks';

export function fetchAll() {
  return AsyncStorage.getItem(DECK_KEY);
}

export function submitDeck(title) {
  return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
    [title]: {
      title,
      questions: [],
    },
  }));
}

export function submitCard(deck, question, answer) {
  return AsyncStorage.getItem(DECK_KEY, (err, result) => {
    const data = JSON.parse(result);
    AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
      [deck]: {
        questions: data[deck].questions.concat({ question, answer }),
      },
    }));
  });
}

export function removeAll() {
  return function removeAllThunk(dispatch) {
    AsyncStorage.getItem(DECK_KEY, (err, res) => {
      const data = JSON.parse(res);
      const keys = Object.keys(data);
      AsyncStorage.removeItem(DECK_KEY, () => {
        keys.map((result, i, store) => {
          const key = store[i];
          return dispatch(removeDeck(key));
        });
      });
    });
  };
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification() {
  return {
    title: 'Quiz Reminder',
    body: "Don't forget to take a quiz today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();
              const tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(17);
              tomorrow.setMinutes(20);
              tomorrow.setSeconds(0);
              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                },
              );
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
      }
    });
}
