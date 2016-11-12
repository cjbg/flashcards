import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Navigator,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { TaskList } from '../components/TaskList';
import flashcards from '../assets/flashcards';

export default class HomeScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
      this.state = {
        todos:[
          { task: flashcards.flashcards[0].name },
          { task: flashcards.flashcards[1].name },
        ]
      }
    }

  static route = {
    navigationBar: {
      visible: false,
    },
  }

  onAddStarted(){
    this.nav.push({
      name: 'taskform',
    });
  }

  renderScene(route, nav){
    switch (route.name) {
      case 'taskform':
          return (
            <Text>Add form comes here!</Text>
          );
        break;
      default:
        return (
          <View style={styles.container}>
            <ScrollView
              style={styles.container}
              contentContainerStyle={styles.contentContainer}>

                <View style={styles.headerContainer}>
                  <Text style={styles.headerText}>Todo List</Text>
                </View>

                <TaskList
                    onAddStarted={this.onAddStarted.bind(this)}
                    todos={this.state.todos}
                />
            </ScrollView>
        </View>
      );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'tasklist', index: 0 }}
        ref={((nav) => {
          this.nav = nav;
        })}
        renderScene={this.renderScene.bind(this)}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 10,
    flex: 1,
    justifyContent: 'flex-start',
  },
  welcomeContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 34.5,
    marginTop: 3,
  },
  headerContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  headerText: {
    fontSize: 25,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
