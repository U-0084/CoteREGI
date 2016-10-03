import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class FeaturedTab extends Component {
  constructor() {
    super();

  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>This is Featured Tab !!</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 20,
    backgroundColor: '#07d39d'
  }
});

export default FeaturedTab;