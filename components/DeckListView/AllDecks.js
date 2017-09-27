/* jshint esversion:6 */
import React from 'react';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';
import DeckTile from './DeckTile';
import { white } from '../../utils/colors';

export default class AllDecks extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.item}>
          <DeckTile title={'Udacity'} size={2} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
},
});
