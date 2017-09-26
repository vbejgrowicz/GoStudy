/* jshint esversion:6 */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigator } from './components/Navigator';
import { AppStatusBar } from './components/AppStatusBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppStatusBar />
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
