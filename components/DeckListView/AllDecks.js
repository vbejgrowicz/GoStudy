/* jshint esversion:6 */
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Platform, FlatList, TouchableOpacity } from 'react-native';
import DeckTile from './DeckTile';
import { white } from '../../utils/colors';
import { fetchAll, removeAll } from '../../utils/StorageManagement';
import Button from '../../utils/Button';

class AllDecks extends React.Component {

  componentDidMount() {
    this.props.fetchAll();
  }

  renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => this.props.navigation.navigate(
          'DeckDetails',
          { deck: item.title }
        )}>
        <DeckTile title={item.title} size={item.questions.length} />
      </TouchableOpacity>
    );
  }

  emptyComponent() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.emptyText}>
          Currently no decks available, add a deck to continue.
        </Text>
      </View>
    );
  }

  reset() {
    this.props.removeAll();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.values(this.props.state)}
          keyExtractor={item => item.title}
          renderItem={this.renderItem.bind(this)}
          ListEmptyComponent={this.emptyComponent}
          ListFooterComponent={() => Object.values(this.props.state).length > 0 ? <Button onPress={this.reset.bind(this)}>Remove All Decks</Button> : null}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
  },
  emptyText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
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
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(AllDecks);
