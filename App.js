import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Navigator from './components/Navigator';
import AppStatusBar from './components/AppStatusBar';
import store from './utils/ReduxStore';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppStatusBar />
        <Navigator />
      </View>
    </Provider>
  );
}
