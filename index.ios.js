import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var DayItem = require('./src/dayItem');

var DAYS = ['Sunday', 'Mondey', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


export default class timerReact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.days}>
          Days of the week:
        </Text>
        <DayItem  day={DAYS[3]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  days: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('timerReact', () => timerReact);
