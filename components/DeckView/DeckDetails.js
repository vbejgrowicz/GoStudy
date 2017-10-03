/* jshint esversion:6 */
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { darkTeal, white } from '../../utils/colors';
import Button from '../../utils/Button';


class DeckDetails extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params.deck
      return {
        title: `${title}`
      }
  }

  render() {
    const { deck } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <View style={{padding: 20}}>
          <Text style={styles.title}>
            {deck.title}
          </Text>
          <Text style={styles.cards}>
            {deck.questions.length} Cards
          </Text>
        </View>
        <Button onPress={() => console.log('Pressed Add Card')}>Add Card</Button>
        <Button onPress={() => console.log('Pressed Start Quiz')}>Start Quiz</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
    color: darkTeal,
  },
  cards: {
    textAlign: 'center',
    fontSize: 30,
    color: darkTeal,
  }
});

export default DeckDetails;
