import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { darkTeal, white } from '../../utils/colors';
import Question from './Question';
import Answer from './Answer';
import ResponseButtons from './ResponseButtons';
import Button from '../Button';
import { clearLocalNotification, setLocalNotification } from '../../utils/StorageManagement';

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
    this.startOver = this.startOver.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  showAnswer() {
    this.setState({ answerVisable: true });
  }

  nextQuestion({ input, currentQuestion, totalQuestions }) {
    this.setState({ answerVisable: false });
    if (input === 'correct') {
      this.setState({ numCorrect: this.state.numCorrect + 1 });
    }
    this.setState({ questionNum: currentQuestion + 1 });
    if (currentQuestion === totalQuestions) {
      clearLocalNotification()
        .then(setLocalNotification);
    }
  }

  startOver() {
    this.setState({ numCorrect: 0 });
    this.setState({ questionNum: 0 });
  }

  goBack() {
    this.props.navigation.goBack();
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
            <ResponseButtons
              Answer={this.nextQuestion}
              currentQuestion={num}
              totalQuestions={questions.length - 1}
            />
          </View>
        ) : (
          <View style={styles.card}>
            <View style={{ flex: 2, justifyContent: 'center', alignSelf: 'stretch' }}>
              <Text style={styles.result}>Score: {result}%</Text>
              <Text style={[styles.result, { fontSize: 17 }]}>
                {this.state.numCorrect} out of {questions.length} Correct
              </Text>
            </View>
            <View style={{
                flex: 2,
                justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-end',
                alignSelf: 'stretch',
                margin: Platform.OS === 'ios' ? 0 : 20,
              }}
            >
              <Button onPress={this.startOver}>Restart Quiz</Button>
              <Button onPress={this.goBack}>Back to Deck</Button>
            </View>
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
