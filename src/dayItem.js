import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class DayItem extends Component {
  render() {
    return (
        <Text style={styles.day}>
          {this.props.day}
        </Text>
    );
  }
}

const styles = StyleSheet.create({
  day: {
    fontSize: 20,
    color: '#0000FF',
  },
});

module.exports = DayItem;