import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header } from '../components/UserDetails';
import colors from '../config/colors';

class Details extends Component {
  render() {
    const contact = this.props.navigation.state.params;

    return (
      <View style={{ backgroundColor: colors.background }}>
        <Header {...contact} />
      </View>
    );
  }
}

export default Details;
