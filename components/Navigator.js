/* jshint esversion:6 */
import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import AllDecks from './DeckListView/AllDecks';
import AddDeck from './AddDeckView/AddDeck';
import DeckDetails from './DeckView/DeckDetails';
import AddQuestion from './AddQuestionView/AddQuestion';
import { white, teal, darkTeal, gray } from '../utils/colors';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const Tabs = TabNavigator({
  Decks: {
    screen: AllDecks,
    navigationOptions: {
      tabBarLabel: 'All Decks',
      tabBarIcon: (({ tintColor }) => <MaterialCommunityIcons name ='cards' size={26} color={tintColor} />)
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: (({ tintColor }) => <FontAwesome name ='plus-square' size={26} color={tintColor} />)
    }
  },
},
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      labelStyle: {
        fontSize: 15
      },
      indicatorStyle: {
        backgroundColor: darkTeal
      },
      activeTintColor: Platform.OS === 'ios' ? teal : darkTeal,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : teal,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
});

export const Navigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: teal,
      }
    }
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      title: 'Add Card',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: teal,
      }
    }
  }
});
