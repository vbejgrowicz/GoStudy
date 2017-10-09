import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Platform, KeyboardAvoidingView, Keyboard } from 'react-native';
import Input from './utils/Input';
import { white } from '../../utils/colors';
import { addCard } from '../../actions';
import { submitCard } from '../../utils/StorageManagement';
import Button from '../Button';

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    margin: 20,
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

class AddQuestion extends React.Component {
  constructor({ navigation }) {
    super();
    this.state = {
      deck: navigation.state.params.deck,
      question: '',
      answer: '',
    };
    this.updateQuestion = this.updateQuestion.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    this.submit = this.submit.bind(this);
  }
  updateQuestion(text) {
    this.setState({ question: text });
  }

  updateAnswer(text) {
    this.setState({ answer: text });
  }

  submit() {
    const { deck, question, answer } = this.state;
    if ((question && answer) !== '') {
      this.props.add(deck, question, answer);
      submitCard(deck, question, answer);
      this.setState({ question: '' });
      this.setState({ answer: '' });
      Keyboard.dismiss();
      this.props.navigation.goBack();
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.deck}>
        <Input
          value={this.state.question}
          placeholder="Enter Question..."
          onChange={this.updateQuestion}
        />
        <Input
          value={this.state.answer}
          placeholder="Enter Answer..."
          onChange={this.updateAnswer}
        />
        <Button disabled={this.state.question === '' || this.state.answer === ''} onPress={this.submit}>Add Question</Button>
      </KeyboardAvoidingView>
    );
  }
}

AddQuestion.propTypes = {
  add: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

function mapDispatchtoProps(dispatch) {
  return {
    add: (deck, question, answer) => dispatch(addCard(deck, question, answer)),
  };
}

export default connect(null, mapDispatchtoProps)(AddQuestion);
