import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Platform, KeyboardAvoidingView, Keyboard } from 'react-native';
import TitleInput from './utils/TitleInput';
import { white } from '../../utils/colors';
import { addDeck } from '../../actions';
import { submitDeck } from '../../utils/StorageManagement';
import Button from '../Button';

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

class AddDeck extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateTitle(text) {
    this.setState({ title: text });
  }

  submit() {
    Keyboard.dismiss();
    const { title } = this.state;
    if (title !== '') {
      this.props.add(title);
      submitDeck(title);
      this.setState({ title: '' });
      this.props.navigation.navigate(
        'DeckDetails',
        { deck: title },
      );
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TitleInput title={this.state.title} onChange={this.updateTitle} />
        <Button onPress={this.submit}>Create Deck</Button>
      </KeyboardAvoidingView>
    );
  }
}

AddDeck.propTypes = {
  add: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};


function mapDispatchtoProps(dispatch) {
  return {
    add: title => dispatch(addDeck(title)),
  };
}

export default connect(null, mapDispatchtoProps)(AddDeck);
