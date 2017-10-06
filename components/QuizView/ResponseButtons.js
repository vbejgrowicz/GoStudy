/* jshint esversion:6 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Button from '../Button';
import { darkTeal } from '../../utils/colors';


export default function ResponseButtons ({ Answer }) {
  return (
    <View style={styles.container}>
      <Button buttonStyle={{backgroundColor: 'green'}} onPress={() => Answer({ input: 'correct'})}>Correct</Button>
      <Button buttonStyle={{backgroundColor: 'red'}} onPress={() => Answer({ input: 'incorrect'})}>Incorrect</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 3,
    alignSelf: 'stretch',
    justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-end',
  },
});
