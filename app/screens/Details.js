import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';

import { Header } from '../components/UserDetails';
import colors from '../config/colors';

class Details extends Component {
  render() {
    const contact = this.props.navigation.state.params;

    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        <Header {...contact} />
      </ScrollView>
    );
  }
}

export default Details;
