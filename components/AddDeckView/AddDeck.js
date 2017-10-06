/* jshint esversion:6 */
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Platform, KeyboardAvoidingView, Keyboard } from 'react-native';
import TitleInput from './utils/TitleInput';
import { white, darkTeal } from '../../utils/colors';
import { addDeck } from '../../actions';
import { submitDeck } from '../../utils/StorageManagement';
import Button from '../Button';

class AddDeck extends React.Component {
  constructor() {
    super();
    this.state = {
      title: null
    };
  }

  updateTitle(text) {
    console.log(text);
    this.setState({ title : text });
  }

  submit() {
    Keyboard.dismiss();
    const { title } = this.state;
    if ((title !== null) && (title !== "")) {
      this.props.add(title);
      submitDeck(title);
      this.setState({ title : null });
      this.props.navigation.navigate(
        'DeckDetails',
        { deck: title }
      );
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TitleInput title={this.state.title} onChange={this.updateTitle.bind(this)}/>
        <Button onPress={this.submit.bind(this)}>Create Deck</Button>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
    add: (title) => dispatch(addDeck(title)),
  };
}

export default connect(null, mapDispatchtoProps)(AddDeck);
