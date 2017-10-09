import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo';
import { teal } from '../utils/colors';

export default function AppStatusBar() {
  return (
    <View style={{ backgroundColor: teal, height: Constants.statusBarHeight }}>
      <StatusBar translucent barStyle="light-content" />
    </View>
  );
}
