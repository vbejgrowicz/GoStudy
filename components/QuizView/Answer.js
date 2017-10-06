/* jshint esversion:6 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Button from '../Button';
import { teal } from '../../utils/colors';

export default function Answer ({ showAnswer, answerVisable, Answer }) {

  if (answerVisable === false) {
    return (
      <View style={styles.container}>
        <Button buttonStyle={styles.button} onPress={showAnswer}>
          <Text style={styles.buttontxt}>Show Answer</Text>
        </Button>
      </View>
    );
  }
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{Answer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    color: teal,
  },
  button: {
    backgroundColor: 'transparent',
  },
  buttontxt: {
    textAlign: 'center',
    fontSize: 22,
    color: 'red'
  }
});
