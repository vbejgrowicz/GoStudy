import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Navigator from './components/Navigator';
import AppStatusBar from './components/AppStatusBar';
import store from './utils/ReduxStore';
import { setLocalNotification } from './utils/StorageManagement';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
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
