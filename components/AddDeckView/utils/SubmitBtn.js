/* jshint esversion:6 */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { teal, white } from '../../../utils/colors';

export default function SubmitBtn ({ onSubmit }) {
  return (
    <TouchableOpacity
      style= {Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn}
      onPress={onSubmit}>
        <Text style={styles.submitBtnText}>Submit</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iosSubmitBtn: {
    backgroundColor: teal,
    padding: 10,
    borderRadius: 7,
    height:45,
    marginLeft: 40,
    marginRight: 40,
  },
  androidSubmitBtn: {
    backgroundColor: teal,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 2,
    height:45,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
  color: white,
  fontSize: 22,
  textAlign: 'center',
}
});
