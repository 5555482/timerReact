var Moment = require('moment');
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var DayItem = require('./src/dayItem');

export default class timerReact extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.days()}
      </View>
    );
  };
  days() {
    var daysItems = [];
    for (var i = 0; i < 7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
      )
    }
    return daysItems
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('timerReact', () => timerReact);
