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
        <View style={styles.topContainer}>
          <Text style={styles.titleBar}>To-Do List!</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.checkContainer}>
            <Image source={{uri: CHECKMARK_IMG_URL}} style={styles.checkmarkIcon} />
          </View>
          <View style={styles.taskContainer}>
          <Text style={styles.title}>{task.title}</Text>
          <Text style={styles.dateDue}>{task.dateDue.toDateString()}</Text>
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C6E2FF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#FF7373',
    marginBottom: 5,
  },
  topContainer: {
    // flex: 1,
    alignItems: 'center',
    marginTop: 30,
    height: 40,
    width: 375,
    borderWidth: 1,
    borderColor: '#003366',
    backgroundColor: 'rgba(255, 115, 115, 0.2)',
    margin: 10,
  },
  titleBar: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#003366',
    fontSize: 35,
  },
  checkContainer: {
    borderRightWidth: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderColor: '#003366',
    backgroundColor: 'rgba(250, 250, 250, 0.3)',
  },
  checkmarkIcon: {
    width: 35,
    height: 35,
  },
  rightContainer: {
    // flex: 1,
    width: 375,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#003366',
    backgroundColor: 'rgba(250, 250, 250, 0.3)',
  },
  taskContainer: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: '#003366',
    // backgroundColor: 'rgba(250, 250, 250, 0.3)',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#FF7373',
    textAlign: 'left',
    marginBottom: 1,
    marginLeft: 10,
  },
  dateCreated: {
    fontSize: 15,
    fontFamily: 'Cochin',
    color: '#3EBFBB',
    textAlign: 'left',
    marginLeft: 10,
  },
  dateDue: {
    fontSize: 15,
    fontFamily: 'Cochin',
    color: '#3EBFBB',
    textAlign: 'left',
    marginLeft: 10,
  },
});

AppRegistry.registerComponent('TodoList', () => TodoList);
