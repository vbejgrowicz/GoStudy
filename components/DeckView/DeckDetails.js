/* jshint esversion:6 */
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { darkTeal, white } from '../../utils/colors';
import Button from '../Button';


class DeckDetails extends React.Component {

  static navigationOptions({ navigation }){
    const { deck } = navigation.state.params;
      return {
        title: `${deck}`,
      };
  }

  render() {
    const { deck } = this.props.navigation.state.params;
    const item = Object.values(this.props.state[deck]);
    const title = item[0];
    const questions = item[1];
    return (
      <View style={styles.container}>
        <View style={styles.label}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.cards}>
            {questions.length} Questions
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button
            onPress={() => this.props.navigation.navigate(
              'AddQuestion',
              { deck: title })}>
              Add Question
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate(
              'QuestionDetails',
              { deck: title })}>
            Start Quiz
          </Button>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
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
    fontSize: 40,
    fontWeight: 'bold',
    color: darkTeal,
  },
  cards: {
    textAlign: 'center',
    fontSize: 20,
    color: darkTeal,
  },
  buttons: {
    flex: 2,
    margin: Platform.OS === 'ios' ? 0 : 10,
    justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-end',
    alignItems: 'center',
  },
  label: {
    flex: 2,
    justifyContent: 'center',
  }
});

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(DeckDetails);
