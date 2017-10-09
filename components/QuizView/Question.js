import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { darkTeal } from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    color: darkTeal,
  },
});

export default function Question({ textQuestion }) {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {textQuestion}
      </Text>
    </View>
  );
}

Question.propTypes = {
  textQuestion: PropTypes.string.isRequired,
};
