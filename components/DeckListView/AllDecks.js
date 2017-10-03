/* jshint esversion:6 */
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Platform, FlatList, AsyncStorage } from 'react-native';
import DeckTile from './DeckTile';
import { white } from '../../utils/colors';
import { fetchAll, removeAll } from '../../utils/StorageManagement';
import ResetBtn from './utils/ResetBtn';

class AllDecks extends React.Component {

  componentDidMount() {
    this.props.fetchAll();
  }

  renderItem({ item }) {
    return (
      <View style={styles.item}>
        <DeckTile title={item.title} size={item.questions.length} />
      </View>
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
          renderItem={this.renderItem}
          ListEmptyComponent={this.emptyComponent}
          ListFooterComponent={() => Object.values(this.props.state).length > 0 ? <ResetBtn onReset={this.reset.bind(this)} /> : null}
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
    marginVertical: 30,
    marginHorizontal: 40,
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
