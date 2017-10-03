/* jshint esversion:6 */
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Platform, KeyboardAvoidingView, Keyboard } from 'react-native';
import TitleInput from './utils/TitleInput';
import { white, darkTeal } from '../../utils/colors';
import { addDeck } from '../../actions';
import { submitDeck } from '../../utils/StorageManagement';

import Button from '../../utils/Button';

class AddDeck extends React.Component {
  state = {
    title: null
  }

  updateTitle = (text) => {
    console.log(text);
    this.setState({ title: text });
  }

  submit = () => {
    const { title } = this.state;
    if (title !== null) {
      this.props.add(title);
      submitDeck(title);
      this.setState({ title: null });
      Keyboard.dismiss();
      this.props.navigation.goBack();
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.deck}>
          <Text style={styles.header}>What is the title of your new deck?</Text>
          <TitleInput title={this.state.title} onChange={this.updateTitle}/>
          <Button onPress={this.submit.bind(this)}>Submit</Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    fontSize: 30,
    color: darkTeal,
    textAlign: 'center',
  },
  deck: {
    backgroundColor:white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 20,
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
  }
}

export default connect(null, mapDispatchtoProps)(AddDeck);
