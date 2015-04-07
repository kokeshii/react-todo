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

  {
    title: 'Test Task 3',
    dateCreated: new Date(),
    dateDue: new Date(2017, 9, 12),
  },

  {
    title: 'Test Task 4',
    dateCreated: new Date(),
    dateDue: new Date(2018, 11, 30),
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
        <View style={styles.topContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleBar}>To-Do List!</Text>
          </View>
          <TouchableHighlight onPress={ () => console.log("Add Task") }>
            <View style={styles.plusContainer}>
              <Text style={styles.plus}> + </Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.checkContainer}>
            <TouchableHighlight onPress={ () => console.log("hiiee") }>
                 <Image source={{uri: CHECKMARK_IMG_URL}} style={styles.checkmarkIcon} />
            </TouchableHighlight>
          </View>
          <View style={styles.taskContainer}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.dateDue}>{task.dateDue.toDateString()}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.checkContainer}>
            <TouchableHighlight onPress={ () => console.log("hiiee") }>
                 <Image source={{uri: CHECKMARK_IMG_URL}} style={styles.checkmarkIcon} />
            </TouchableHighlight>
          </View>
          <View style={styles.taskContainer}>
            <Text style={styles.title}>{MOCKED_TASKS_DATA[1].title}</Text>
            <Text style={styles.dateDue}>{MOCKED_TASKS_DATA[1].dateDue.toDateString()}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.checkContainer}>
            <TouchableHighlight onPress={ () => console.log("hiiee") }>
                 <Image source={{uri: CHECKMARK_IMG_URL}} style={styles.checkmarkIcon} />
            </TouchableHighlight>
          </View>
          <View style={styles.taskContainer}>
            <Text style={styles.title}>{MOCKED_TASKS_DATA[2].title}</Text>
            <Text style={styles.dateDue}>{MOCKED_TASKS_DATA[2].dateDue.toDateString()}</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.checkContainer}>
            <TouchableHighlight onPress={ () => console.log("hiiee") }>
                 <Image source={{uri: CHECKMARK_IMG_URL}} style={styles.checkmarkIcon} />
            </TouchableHighlight>
          </View>
          <View style={styles.taskContainer}>
            <Text style={styles.title}>{MOCKED_TASKS_DATA[3].title}</Text>
            <Text style={styles.dateDue}>{MOCKED_TASKS_DATA[3].dateDue.toDateString()}</Text>
          </View>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  doneTask: {
    opacity: 0.5,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
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
    flexDirection: 'row',
    // alignSelf: 'flex-start',
    alignItems: 'stretch',
    justifyContent: 'center',
    top: 0,
    marginTop: 30,
    height: 40,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    backgroundColor: 'rgba(250, 250, 250, 0.2)',
    margin: 10,
  },
  plusContainer: {
    flex: 1,
    borderLeftWidth: 1,
    justifyContent: 'flex-end',
    borderColor: '#FFFFFF',
    backgroundColor: 'rgba(250, 250, 250, 0.3)',
    alignItems: 'center',
  },
  plus: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#003366',
    fontSize: 35,
  },
  titleContainer: {
    flex: 7,
    alignItems: 'center',
  },
  titleBar: {
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#003366',
    fontSize: 35,
  },
  checkContainer: {
    // flex: 1,
    borderRightWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: 'rgba(250, 250, 250, 0.3)',
  },
  checkmarkIcon: {
    margin: 4,
    width: 35,
    height: 35,
  },
  rightContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    backgroundColor: 'rgba(250, 250, 250, 0.3)',
  },
  taskContainer: {
    flex: 1,
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
