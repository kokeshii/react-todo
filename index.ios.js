/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var MOCKED_TASKS_DATA = [

  {
    title: 'Test Task 1',
    dateCreated: new Date(),
    dateDue: new Date(2015, 5, 17),
  },

  {
    title: 'Test Task 2',
    dateCreated: new Date(),
    dateDue: new Date(2016, 1, 1),
  },

];

var CHECKMARK_IMG_URL = "http://vignette3.wikia.nocookie.net/roblox/images/5/57/Very-Basic-Checkmark-icon.png";


var {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  Image,
  View,
  TouchableHighlight,
} = React;

var TodoList = React.createClass({


  getInitialState: function() {
    return {
      tasks: MOCKED_TASKS_DATA
    };
  },

  render: function() {
    var task = MOCKED_TASKS_DATA[0];
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={() => console.log('pressed')}>
        <Image source={{uri: CHECKMARK_IMG_URL}} style={styles.checkmarkIcon} />
        </TouchableHighlight>
        <View style={styles.rightContainer}>
          <Text>{task.title}</Text>
          <Text>{task.dateDue.toDateString()}</Text>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
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
  checkmarkIcon: {
    width: 35,
    height: 35
  },
  rightContainer: {
    flex: 1,
  },
});

AppRegistry.registerComponent('TodoList', () => TodoList);
