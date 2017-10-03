/* jshint esversion:6 */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from './components/Navigator';
import { AppStatusBar } from './components/AppStatusBar';
import store from './utils/ReduxStore';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppStatusBar />
          <Navigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
