import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../Button';
import { teal } from '../../utils/colors';

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
  buttontxt: {
    textAlign: 'center',
    fontSize: 22,
    color: 'red',
  },
});

export default function Answer({ showAnswer, answerVisable, textAnswer }) {
  if (answerVisable === false) {
    return (
      <View style={styles.container}>
        <Button buttonStyle={{ backgroundColor: 'transparent' }} onPress={showAnswer}>
          <Text style={styles.buttontxt}>Show Answer</Text>
        </Button>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{textAnswer}</Text>
    </View>
  );
}

Answer.propTypes = {
  showAnswer: PropTypes.func.isRequired,
  answerVisable: PropTypes.bool.isRequired,
  textAnswer: PropTypes.string.isRequired,
};
