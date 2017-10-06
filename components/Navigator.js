/* jshint esversion:6 */
import React from 'react';
import { Platform, Easing, Animated } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import AllDecks from './DeckListView/AllDecks';
import AddDeck from './AddDeckView/AddDeck';
import DeckDetails from './DeckView/DeckDetails';
import AddQuestion from './AddQuestionView/AddQuestion';
import QuestionDetails from './QuizView/QuestionDetails';
import { white, teal, darkTeal } from '../utils/colors';
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
        fontSize: 17
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
    },
  },
  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      title: 'Add Question',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: teal,
      }
    }
  },
  QuestionDetails: {
    screen: QuestionDetails,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: teal,
      }
    }
  }
},
{
  transitionConfig: () => ({
   transitionSpec: {
     duration: 300,
   },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
       const { index } = scene;
       console.log(index);

       const opacity = position.interpolate({
         inputRange: [index - 0.7, index, index + 0.7],
         outputRange: [0.3, 1, 0.3],
       });
       return { opacity };
   },
  })
}
);
