import React, { Component } from 'react';
import FeaturedTab from './FeaturedTab';
import SearchTab from './SearchTab';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

export default class cote_regi extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'FeaturedTab'
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress() {

  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
    });
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedtab === 'Home'}
          systemIcon='contacts'
        >
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'FeaturedTab'}
          systemIcon='featured'
          onPress={() => this.setState({ selectedTab: 'FeaturedTab'})}
        >
          <FeaturedTab />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'SearchTab'}
          systemIcon='search'
          onPress={() => {
            this.setState(
              {selectedTab: 'SearchTab'}
            );
          }}
        >
          <SearchTab />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}