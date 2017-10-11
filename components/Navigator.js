import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import AllDecks from './DeckListView/AllDecks';
import AddDeck from './AddDeckView/AddDeck';
import DeckDetails from './DeckView/DeckDetails';
import AddQuestion from './AddQuestionView/AddQuestion';
import QuestionDetails from './QuizView/QuestionDetails';
import { white, teal, darkTeal } from '../utils/colors';

const MainTab = StackNavigator(
  {
    Home: {
      screen: AllDecks,
      path: '/',
      navigationOptions: {
        header: null,
      },
    },
    DeckDetails: {
      screen: DeckDetails,
      path: '/DeckDetails',
      navigationOptions: {
        tabBarVisible: false,
        headerTintColor: white,
        headerStyle: {
          backgroundColor: teal,
        },
      },
    },
    AddQuestion: {
      screen: AddQuestion,
      path: '/',
      navigationOptions: {
        tabBarVisible: false,
        title: 'Add Question',
        headerTintColor: white,
        headerStyle: {
          backgroundColor: teal,
        },
      },
    },
    QuestionDetails: {
      screen: QuestionDetails,
      path: '/',
      navigationOptions: {
        tabBarVisible: false,
        headerTintColor: white,
        headerStyle: {
          backgroundColor: teal,
        },
      },
    },
  },
  {
    mode: 'modal',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 400,
      },
      screenInterpolator: (sceneProps) => {
        const { scene, position } = sceneProps;
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

const AddTab = StackNavigator(
  {
    AddDeck: {
      screen: AddDeck,
      path: '/',
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
);

const Navigator = TabNavigator({
  MainTab: {
    screen: MainTab,
    path: '/',
    navigationOptions: {
      tabBarLabel: 'All Decks',
      tabBarIcon: (({ tintColor }) =>
        <MaterialCommunityIcons name="cards" size={26} color={tintColor} />),
    },
  },
  AddTab: {
    screen: AddTab,
    path: '/',
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: (({ tintColor }) =>
        <FontAwesome name="plus-square" size={26} color={tintColor} />),
    },
  },
},
{
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
export default Navigator;
