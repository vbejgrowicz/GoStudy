import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput } from 'react-native';
import { darkTeal } from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    marginHorizontal: 10,
  },
  input: {
    textAlign: 'center',
    fontSize: 20,
    height: 50,
    color: darkTeal,
  },
});

export default function TitleInput({ title, onChange, onPress }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        placeholder="Enter Title..."
        value={title}
        maxLength={40}
        onChangeText={text => onChange(text)}
        onSubmitEditing={() => onPress()}
      />
    </View>
  );
}

TitleInput.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};
