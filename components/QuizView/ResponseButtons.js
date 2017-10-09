import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Platform } from 'react-native';
import Button from '../Button';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 3,
    alignSelf: 'stretch',
    justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-end',
  },
});

export default function ResponseButtons({ Answer }) {
  return (
    <View style={styles.container}>
      <Button buttonStyle={{ backgroundColor: 'green' }} onPress={() => Answer({ input: 'correct' })}>
        Correct
      </Button>
      <Button buttonStyle={{ backgroundColor: 'red' }} onPress={() => Answer({ input: 'incorrect' })}>
        Incorrect
      </Button>
    </View>
  );
}

ResponseButtons.propTypes = {
  Answer: PropTypes.func.isRequired,
};
