import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native';

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
      header: (props) => ({
        left: <Button title="Open" onPress={() => props.navigate('DrawerOpen')} />
      }),
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: ({ state }) => `${capitalizeFirstLetter(state.params.name.first)} ${capitalizeFirstLetter(state.params.name.last)}`,
    },
  },
});

export const NewContactStack = StackNavigator({
  NewContact: {
    screen: NewContact,
    navigationOptions: {
      title: 'New Contact',
      header: (props) => ({
        left: <Button title="Open" onPress={() => props.navigate('DrawerOpen')} />
      }),
    },
  },
});

export const MeStack = StackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'Me',
      header: (props) => ({
        left: <Button title="Open" onPress={() => props.navigate('DrawerOpen')} />
      }),
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

export const Drawer = DrawerNavigator({
  Contact: {
    screen: ContactsStack,
    navigationOptions: {
      drawer: {
        label: 'Contacts',
      }
    }
  },
  NewContact: {
    screen: NewContactStack,
    navigationOptions: {
      drawer: {
        label: 'New Contact',
      }
    }
  },
  Me: {
    screen: MeStack,
    navigationOptions: {
      drawer: {
        label: 'Me',
      }
    }
  },
})
