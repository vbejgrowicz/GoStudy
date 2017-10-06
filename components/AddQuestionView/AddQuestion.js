/* jshint esversion:6 */
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Platform, KeyboardAvoidingView, Keyboard } from 'react-native';
import Input from './utils/Input';
import { white, darkTeal } from '../../utils/colors';
import { addCard } from '../../actions';
import { submitCard } from '../../utils/StorageManagement';
import Button from '../Button';

class AddQuestion extends React.Component {
  state = {
    deck: null,
    question: null,
    answer: null
  }

  componentDidMount() {
    this.setState({ deck: this.props.navigation.state.params.deck });
  }

  updateQuestion = (text) => {
    console.log('question: ', this.state.question, ' answer: ', this.state.answer);
    this.setState({ question: text });
  }

  updateAnswer = (text) => {
    console.log('question: ', this.state.question, ' answer: ', this.state.answer);
    this.setState({ answer: text });
  }

  submit = () => {
    const { deck, question, answer } = this.state;
    if ((question && answer) !== null) {
      this.props.add(deck, question, answer);
      submitCard(deck, question, answer);
      this.setState({ question: null });
      this.setState({ answer: null });
      Keyboard.dismiss();
      this.props.navigation.goBack();
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.deck}>
        <Input value={this.state.question} placeholder='Enter Question...' onChange={this.updateQuestion}/>
        <Input value={this.state.answer} placeholder='Enter Answer...' onChange={this.updateAnswer}/>
        <Button onPress={this.submit.bind(this)}>Add Question</Button>
      </KeyboardAvoidingView>
    );
  }
}

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

function mapDispatchtoProps(dispatch) {
  return {
    add: (deck, question, answer) => dispatch(addCard(deck, question, answer)),
  }
}

export default connect(null, mapDispatchtoProps)(AddQuestion);
