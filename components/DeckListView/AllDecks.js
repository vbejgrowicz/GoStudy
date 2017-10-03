/* jshint esversion:6 */
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';
import DeckTile from './DeckTile';
import { white } from '../../utils/colors';
import { fetchAll } from '../../utils/StorageManagement';

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

  render() {
    return (
      <FlatList
        data={Object.values(this.props.state)}
        keyExtractor={item => item.title}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === 'ios' ? 16 : 2,
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0,0,0,24)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
},
});

function mapStateToProps(state) {
  return {
    state: state
  };
}

function mapDispatchtoProps(dispatch) {
  return {
    fetchAll: () => dispatch(fetchAll()),

  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(AllDecks);
