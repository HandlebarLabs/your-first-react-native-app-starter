import { StackNavigator } from 'react-navigation';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';

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
    navigationOptions: {
      title: ({ state }) => `${capitalizeFirstLetter(state.params.name.first)} ${capitalizeFirstLetter(state.params.name.last)}`,
    },
  },
});
