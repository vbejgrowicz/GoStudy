import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { darkTeal, white } from '../../utils/colors';
import Button from '../Button';

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
    padding: 10,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: darkTeal,
  },
  cards: {
    textAlign: 'center',
    fontSize: 22,
    color: darkTeal,
  },
  label: {
    flex: 2,
    justifyContent: 'center',
  },
  buttons: {
    flex: 2,
    margin: Platform.OS === 'ios' ? 0 : 20,
    justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-end',
  },
});

class DeckDetails extends React.Component {
  static navigationOptions({ navigation }) {
    const { deck } = navigation.state.params;
    return {
      title: `${deck}`,
    };
  }

  render() {
    const { deck } = this.props.navigation.state.params;
    const item = Object.values(this.props.decks[deck]);
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
              { deck: title },
            )}
          >
              Add Question
          </Button>
          <Button
            disabled={questions.length === 0}
            onPress={() => this.props.navigation.navigate(
              'QuestionDetails',
              { deck: title },
            )}
          >
            Start Quiz
          </Button>
        </View>
      </View>
    );
  }
}

DeckDetails.propTypes = {
  decks: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    decks: state,
  };
}

export default connect(mapStateToProps)(DeckDetails);
