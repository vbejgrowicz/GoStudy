/* jshint esversion:6 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Button from '../Button';
import { darkTeal } from '../../utils/colors';


export default function Answer ({ showAnswer, answerVisable, Answer }) {

  if (answerVisable === false) {
    return (
      <View>
        <TouchableOpacity onPress={showAnswer}>
          <Text style={styles.text}>Show Answer</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View>
        <Text style={styles.text}>{Answer}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: darkTeal,
  }
});
