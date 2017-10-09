import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { darkTeal, white } from '../../utils/colors';
import Question from './Question';
import Answer from './Answer';
import ResponseButtons from './ResponseButtons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  card: {
    flex: 1,
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
  result: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    color: darkTeal,
  },
});

class QuestionDetails extends React.Component {
  static navigationOptions({ navigation }) {
    const { deck } = navigation.state.params;
    return {
      title: `Quiz on ${deck}`,
    };
  }
  constructor() {
    super();
    this.state = {
      answerVisable: false,
      questionNum: 0,
      numCorrect: 0,
    };
    this.showAnswer = this.showAnswer.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  showAnswer() {
    this.setState({ answerVisable: true });
  }

  nextQuestion({ input }) {
    this.setState({ answerVisable: false });
    if (input === 'correct') {
      this.setState({ numCorrect: this.state.numCorrect + 1 });
    }
    this.setState({ questionNum: this.state.questionNum + 1 });
  }

  render() {
    const { deck } = this.props.navigation.state.params;
    const { questions } = this.props.decks[deck];
    const num = this.state.questionNum;
    const result = Math.round((this.state.numCorrect / questions.length) * 100);
    return (
      <View style={styles.container}>
        {num <= (questions.length - 1) ? (
          <View style={styles.card}>
            <Text style={{ padding: 10, color: darkTeal }}>
              Question {num + 1} of {questions.length}
            </Text>
            <Question textQuestion={questions[num].question} />
            <Answer
              showAnswer={this.showAnswer}
              answerVisable={this.state.answerVisable}
              textAnswer={questions[num].answer}
            />
            <ResponseButtons Answer={this.nextQuestion} />
          </View>
        ) : (
          <View style={styles.card}>
            <Text style={styles.result}>Score: {result}%</Text>
            <Text style={[styles.result, { fontSize: 17 }]}>
              {this.state.numCorrect} out of {questions.length} Correct
            </Text>
          </View>
        )}
      </View>
    );
  }
}

QuestionDetails.propTypes = {
  navigation: PropTypes.object.isRequired,
  decks: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
  return {
    decks: state,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
