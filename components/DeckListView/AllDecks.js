/* jshint esversion:6 */
import React from 'react';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { StyleSheet, View, FlatList, TouchableOpacity, Animated } from 'react-native';
import DeckTile from './DeckTile';
import { fetchAll, removeAll } from '../../utils/StorageManagement';
import { addDeck, addCard } from '../../actions';
import Button from '../Button';
import EmptyList from './EmptyList';

class AllDecks extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    fetchAll()
      .then((data) => {
        data.map((key, i, result) => {
          deck = JSON.parse(result[i][1]);
          this.props.addDeck(deck.title);
          const questions = deck.questions;
          questions.map((card) => {
            const question = card.question;
            const answer = card.answer;
            this.props.addCard(deck.title, question, answer);
          });
        });
      }).then(() => this.setState({ ready : true }));

    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 300,
      }
    ).start();
  }

  onItemPress({ item }) {
    this.props.navigation.navigate(
      'DeckDetails',
      { deck: item.title }
    );
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => this.onItemPress({ item })}>
        <DeckTile title={item.title} size={item.questions.length} />
      </TouchableOpacity>
    );
  }

  reset() {
    this.props.removeAll();
  }

  render() {
    const { ready, fadeAnim } = this.state;

    if (ready === false) {
      return (
        <AppLoading />
      );
    }
    return (
      <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
        <FlatList
          data={Object.values(this.props.state)}
          keyExtractor={item => item.title}
          renderItem={this.renderItem.bind(this)}
          ListEmptyComponent={<EmptyList />}
          ListFooterComponent={() => Object.values(this.props.state).length > 0 ? <Button onPress={this.reset.bind(this)}>Remove All Decks</Button> : null}
        />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'stretch',
  }
});

function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    fetchAll: () => dispatch(fetchAll()),
    removeAll: () => dispatch(removeAll()),
    addDeck: (deck) => dispatch(addDeck(deck)),
    addCard: (title, question, answer) => dispatch(addCard(title, question, answer)),
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(AllDecks);
