import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Navigator,
  Text,
  View,
} from "react-native";
import {
  ExponentLinksView,
} from "@exponent/samples";

import { TaskList } from "../components/TaskList";

import sleepMeds from "../assets/sleepMeds";
import sleepMedsOld from "../assets/sleepMeds_Old";
import meds3 from "../assets/meds3";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  button: {
    height: 45,
    borderColor: "#05A5D1",
    borderWidth: 2,
    backgroundColor: "#333",
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FAFAFA",
    fontSize: 20,
    fontWeight: "600",
  },
  headerContainer: {
    alignItems: "flex-start",
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "black",
  },
  headerText: {
    fontSize: 26,
  },
});

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  onSleepMedsOldStarted(){
    this.nav.push({
      name: "sleepMedsOld",
    });
  }

  onSleepMedsStarted(){
    this.nav.push({
      name: "sleepMeds",
    });
  }
  onMeds3Started(){
    this.nav.push({
      name: "meds3",
    });
  }

  renderScene(route, nav){
    switch(route.name){
      case "sleepMeds":
        return(
          <TaskList
            flashcards={sleepMeds}
            groupTitle={"Nowe"}
            onNavBack={this.onNavBack.bind(this)}
          />
        );        
      case "sleepMedsOld":
        return(
          <TaskList
            flashcards={sleepMedsOld}
            groupTitle={"Leki na OUN: Leki anksiolityczne,  przeciw padaczkowe i nasenne"}
            onNavBack={this.onNavBack.bind(this)}
          />
        );
      case "meds3":
        return(
          <TaskList
            flashcards={meds3}
            groupTitle={"Trzecia część"}
            onNavBack={this.onNavBack.bind(this)}
          />
        );       
      default:
      return(
        <ScrollView
          style={styles.container}
          contentContainerStyle={this.props.route.getContentContainerStyle()}>

          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              Grupy
            </Text>
          </View>

          {/* TODO: Use taskRow component to populate automaticaly list of fhashcard groups
            Store flashcard groups in separate json
            */}

          <TouchableHighlight
            onPress={this.onSleepMedsOldStarted.bind(this)}
            style={styles.button}>
            <Text style={styles.buttonText}>
                  Pierwsze
              </Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this.onSleepMedsStarted.bind(this)}
            style={styles.button}>
            <Text style={styles.buttonText}>
                  Drugie
              </Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={this.onMeds3Started.bind(this)}
            style={styles.button}>
            <Text style={styles.buttonText}>
                  Trzecie
            </Text>
          </TouchableHighlight>

        </ScrollView>
      );
    };
  };

  onNavBack(){
    this.nav.pop();
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: "tasklist", index: 0 }}
        ref={( (nav) => {
          this.nav = nav;
        })}
        renderScene={this.renderScene.bind(this)}
      />
    );
  };
};
