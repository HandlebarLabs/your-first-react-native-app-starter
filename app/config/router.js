import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';

import { capitalizeFirstLetter } from '../helpers/string';

export const ContactsStack = StackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts',
    },
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      headerTitle: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
    }),
  },
});

export const NewContactStack = StackNavigator({
  NewContact: {
    screen: NewContact,
    navigationOptions: {
      title: 'New Contact',
    },
  },
});

export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'Me',
    },
  },
});

export const Tabs = TabNavigator({
  Contacts: {
    screen: ContactsStack,
    navigationOptions: {
      tabBar: {
        label: 'Contacts',
        icon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor} />
      }
    }
  },
  NewContact: {
    screen: NewContactStack,
    navigationOptions: {
      tabBar: {
        label: 'New Contact',
        icon: ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor} />
      }
    }
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      tabBar: {
        label: 'Me',
        icon: ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor} />
      }
    }
  },
});
