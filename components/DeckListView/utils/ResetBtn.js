/* jshint esversion:6 */
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import { teal, white } from '../../../utils/colors';

export default function ResetBtn ({ onReset }) {
  return (
    <View style={{padding: 10}}>
      <TouchableOpacity
        style= {Platform.OS === 'ios' ? styles.iosResetBtn : styles.androidResetBtn}
        onPress={onReset}>
          <Text style={styles.resetBtnText}>Remove All Decks</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iosResetBtn: {
    backgroundColor: teal,
    padding: 10,
    borderRadius: 7,
    height:45,
    marginLeft: 40,
    marginRight: 40,
  },
  androidResetBtn: {
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
  resetBtnText: {
  color: white,
  fontSize: 22,
  textAlign: 'center',
}
});
