import React, { Component, PropTypes } from 'react';
import { FlatList, View, Text } from 'react-native';

import { contacts } from '../config/data';
import colors from '../config/colors';

class Contacts extends Component {
  render() {
    return (
      <FlatList
        style={{ backgroundColor: colors.background }}
        data={contacts}
        renderItem={({ item }) =>
          <View><Text>{item.email}</Text></View>
        }
        keyExtractor={(item) => item.email}
      />
    );
  }
}

export default Contacts;
