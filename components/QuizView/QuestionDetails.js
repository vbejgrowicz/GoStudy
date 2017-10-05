/* jshint esversion:6 */
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import { darkTeal, white } from '../../utils/colors';
import Button from '../Button';
import Question from './Question';
import Answer from './Answer';

class QuestionDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      answerVisable: false,
      questionNum: 0,
      numCorrect: 0,
    };
  }

  static navigationOptions({ navigation }){
    const { deck } = navigation.state.params;
      return {
        title: `Quiz on ${deck}`,
      };
  }

  showAnswer() {
    this.setState({ answerVisable : true });
  }

  nextQuestion({ input }) {
    this.setState({ answerVisable : false });
    if (input === 'correct') {
      this.setState({ numCorrect : this.state.numCorrect + 1 });
    }
    this.setState({ questionNum : this.state.questionNum + 1 });
  }

render() {
  const { deck } = this.props.navigation.state.params;
  const questions = this.props.state[deck].questions;
  const num = this.state.questionNum;
  return (
    <View style={styles.card}>
      {num <= (questions.length -1) ? (
        <View>
          <Question Question={questions[num].question} />
          <Answer showAnswer={this.showAnswer.bind(this)} answerVisable={this.state.answerVisable} Answer={questions[num].answer}/>
          <TouchableOpacity onPress={() => this.nextQuestion({ input: 'correct'})}>
            <Text style={styles.text}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.nextQuestion({ input: 'incorrect'})}>
            <Text style={styles.text}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      ):(
        <View>
          <Text>End Of Quiz</Text>
          <Text>{this.state.numCorrect}/{questions.length}</Text>

        </View>
      )}
    </View>
  );
  }
}

const styles = StyleSheet.create({
  card: {
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
});

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(QuestionDetails);
