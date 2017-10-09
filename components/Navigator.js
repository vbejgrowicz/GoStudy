import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import AllDecks from './DeckListView/AllDecks';
import AddDeck from './AddDeckView/AddDeck';
import DeckDetails from './DeckView/DeckDetails';
import AddQuestion from './AddQuestionView/AddQuestion';
import QuestionDetails from './QuizView/QuestionDetails';
import { white, teal, darkTeal } from '../utils/colors';

const Tabs = TabNavigator(
  {
    Decks: {
      screen: AllDecks,
      navigationOptions: {
        tabBarLabel: 'All Decks',
        tabBarIcon: (({ tintColor }) =>
          <MaterialCommunityIcons name="cards" size={26} color={tintColor} />),
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: (({ tintColor }) =>
          <FontAwesome name="plus-square" size={26} color={tintColor} />),
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      labelStyle: {
        fontSize: 17,
      },
      indicatorStyle: {
        backgroundColor: darkTeal,
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
        shadowOpacity: 1,
      },
    },
  },
);

const Navigator = StackNavigator(
  {
    Home: {
      screen: Tabs,
    },
    DeckDetails: {
      screen: DeckDetails,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: teal,
        },
      },
    },
    AddQuestion: {
      screen: AddQuestion,
      navigationOptions: {
        title: 'Add Question',
        headerTintColor: white,
        headerStyle: {
          backgroundColor: teal,
        },
      },
    },
    QuestionDetails: {
      screen: QuestionDetails,
      navigationOptions: {
        headerTintColor: white,
        headerStyle: {
          backgroundColor: teal,
        },
      },
    },
  },
  {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 500,
      },
      screenInterpolator: (sceneProps) => {
        const { position, scene } = sceneProps;
        const { index } = scene;
        const opacity = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0, 1, 1],
        });
        return { opacity };
      },
    }),
  },
);

export default Navigator;
