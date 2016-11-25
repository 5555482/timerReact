var Moment = require('moment');
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
        {this.days()}
      </View>
    );
  };
  days() {
    return DAYS.map(function(day){
      return <DayItem day={day} />
    })
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
