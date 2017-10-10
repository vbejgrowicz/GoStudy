import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Platform } from 'react-native';
import Button from '../Button';

const styles = StyleSheet.create({
  container: {
    margin: Platform.OS === 'ios' ? 0 : 20,
    flex: 3,
    alignSelf: 'stretch',
    justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-end',
  },
});

export default function ResponseButtons({ Answer, currentQuestion, totalQuestions }) {
  return (
    <View style={styles.container}>
      <Button buttonStyle={{ backgroundColor: 'green' }} onPress={() => Answer({ input: 'correct', currentQuestion, totalQuestions })}>
        Correct
      </Button>
      <Button buttonStyle={{ backgroundColor: 'red' }} onPress={() => Answer({ input: 'incorrect', currentQuestion, totalQuestions })}>
        Incorrect
      </Button>
    </View>
  );
}

ResponseButtons.propTypes = {
  Answer: PropTypes.func.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};
