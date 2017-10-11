import React from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';
import DeckTile from './DeckTile';
import { fetchAll, removeAll } from '../../utils/StorageManagement';
import { addDeck, addCard } from '../../actions';
import Button from '../Button';
import EmptyList from './EmptyList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'stretch',
  },
});

class AllDecks extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      fadeAnim: new Animated.Value(0),
    };
    this.renderItem = this.renderItem.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    fetchAll()
      .then((res) => {
        if (res !== null) {
          const data = JSON.parse(res);
          const dataArr = Object.entries(data);
          dataArr.map((key, i, result) => {
            const title = result[i][0];
            const deck = result[i][1];
            const { questions } = deck;
            this.props.addDeck(title);
            return questions.map((card) => {
              const { question, answer } = card;
              return this.props.addCard(title, question, answer);
            });
          });
        }
      }).then(() => this.setState({ ready: true }));

    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 300,
      },
    ).start();
  }

  onItemPress({ item }) {
    this.props.navigation.navigate(
      'DeckDetails',
      { deck: item.title },
    );
  }

  reset() {
    this.props.removeAll();
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => this.onItemPress({ item })}
      >
        <DeckTile title={item.title} size={item.questions.length} />
      </TouchableOpacity>
    );
  }

  render() {
    const { ready, fadeAnim } = this.state;
    if (ready === false) {
      return (
        <AppLoading />
      );
    }
    return (
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <FlatList
          data={Object.values(this.props.decks)}
          keyExtractor={item => item.title}
          renderItem={this.renderItem}
          ListEmptyComponent={<EmptyList />}
          ListFooterComponent={Object.values(this.props.decks).length > 0 ?
            <Button onPress={this.reset}>Remove All Decks</Button> : null}
        />
      </Animated.View>
    );
  }
}

AllDecks.propTypes = {
  decks: PropTypes.object.isRequired,
  removeAll: PropTypes.func.isRequired,
  addDeck: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    decks: state,
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    fetchAll: () => dispatch(fetchAll()),
    removeAll: () => dispatch(removeAll()),
    addDeck: deck => dispatch(addDeck(deck)),
    addCard: (title, question, answer) => dispatch(addCard(title, question, answer)),
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(AllDecks);
