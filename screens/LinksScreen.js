import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Navigator,
  Text,
  View,
} from "react-native";

import CheckBox from 'react-native-checkbox';
import { ExponentLinksView } from "@exponent/samples";
import styles from "../constants/Styles.js";

import { TaskList } from "../components/TaskList";
import sleepMeds from "../assets/sleepMeds";
import sleepMedsOld from "../assets/sleepMeds_Old";
import meds2Updated from "../assets/meds2Updated";
import meds3 from "../assets/meds3";
import anticoagulants from "../assets/anticoagulants";
import steroids from "../assets/steroids";
import parasympathetic from "../assets/autonomicParasympathetic";
import symphateticPart1 from "../assets/symphateticPart1";
import blockers from "../assets/blockers";
import hypertensiveMeds from "../assets/HypertensiveMeds";
import inotropicDrugs from "../assets/InotropicDrugsPositive";
import diuretics from "../assets/Diuretics";
import blockingCalcium from "../assets/BlockingCalciumMeds";

export default class LinksScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRandomFlashcards: true
    };
  }

  static route = {
    navigationBar: {
      visible: false,
    },
  }

  //TODO: Simplify
  onSleepMedsOldStarted() {
    this.nav.push({
      name: "sleepMedsOld",
    });
  }

  onSleepMedsStarted() {
    this.nav.push({
      name: "sleepMeds",
    });
  }

  onMeds2UpdatedStarted() {
    this.nav.push({
      name: "meds2Updated"
    });
  }

  onMeds3Started() {
    this.nav.push({
      name: "meds3",
    });
  }

  onAnticogulantsStarted() {
    this.nav.push({
      name: "anticoagulants",
    })
  }

  onSteroidsStarted() {
    this.nav.push({
      name: "steroids",
    })
  }

  onParasympatheticStarted() {
    this.nav.push({
      name: "parasympathetic",
    })
  }

  onSymphateticPart1Started() {
    this.nav.push({
      name: "symphateticPart1",
    })
  }

  onBlockersStarted() {
    this.nav.push({
      name: "blockers",
    })
  }

  onHypertensiveMedsStarted() {
    this.nav.push({
      name: "HypertensiveMeds",
    })
  }

  onInotropicDrugsStarted() {
    this.nav.push({
      name: "InotropicDrugs",
    })
  }

  onDiureticsStarted() {
    this.nav.push({
      name: "Diuretics",
    })
  }

  onBlockingCalciumStarted() {
    this.nav.push({
      name: "BlockingCalcium",
    })
  }

  renderScene(route, nav) {
    switch (route.name) {
      case "sleepMeds":
        return (
          <TaskList
            flashcards={sleepMeds}
            groupTitle={"Nowe"}
            onNavBack={this.onNavBack.bind(this)}
            isRandomFlashcards={this.state.isRandomFlashcards}
          />
        );
      case "sleepMedsOld":
        return (
          <TaskList
            flashcards={sleepMedsOld}
            groupTitle={"Leki na OUN: Leki anksiolityczne,  przeciw padaczkowe i nasenne"}
            onNavBack={this.onNavBack.bind(this)}
            isRandomFlashcards={this.state.isRandomFlashcards}
          />
        );
      case "meds2Updated":
        return (
          <TaskList
            flashcards={meds2Updated}
            groupTitle={"Aktualizacja - Leki na OUN: Leki anksiolityczne,  przeciw padaczkowe i nasenne"}
            onNavBack={this.onNavBack.bind(this)}
            isRandomFlashcards={this.state.isRandomFlashcards}
          />
        );
      case "meds3":
        return (
          <TaskList
            flashcards={meds3}
            groupTitle={"Trzecia część"}
            onNavBack={this.onNavBack.bind(this)}
            isRandomFlashcards={this.state.isRandomFlashcards}
          />
        );
      case "anticoagulants":
        return (
          <TaskList
            flashcards={anticoagulants}
            groupTitle={"Antykogulanty"}
            onNavBack={this.onNavBack.bind(this)}
            isRandomFlashcards={this.state.isRandomFlashcards}
          />
        );
      case "steroids":
        return (
          <TaskList
            flashcards={steroids}
            groupTitle={"Sterydy"}
            onNavBack={this.onNavBack.bind(this)}
            isRandomFlashcards={this.state.isRandomFlashcards}
          />
        )
      case "parasympathetic":
        return (
          <TaskList
            flashcards={parasympathetic}
            groupTitle={"UKLAD AUTONOMICZNY CZESC PRZYWSPOLCZOLNA"}
            onNavBack={this.onNavBack.bind(this)}
            isRandomFlashcards={this.state.isRandomFlashcards}
          />
        )
      case "symphateticPart1":
        return (
          <TaskList
            flashcards={symphateticPart1}
            groupTitle={"Układ Autonomiczny 2 – Współczulny część 1"}
            onNavBack={this.onNavBack.bind(this)}
            isRandomFlashcards={this.state.isRandomFlashcards}
          />
        )
      case "blockers":
        return (
          <TaskList
            flashcards={blockers}
            groupTitle={"b-blokery"}
            onNavBack={this.onNavBack.bind(this)}
            isRandomFlashcards={this.state.isRandomFlashcards}
          />
        )
      case "HypertensiveMeds":
        return (
          <TaskList
            flashcards={hypertensiveMeds}
            groupTitle={"W chorobie nadciśnieniowej"}
            onNavBack={this.onNavBack.bind(this)}
            isRandomFlashcards={this.state.isRandomFlashcards}
          />
        )
      case "InotropicDrugs":
        return (
          <TaskList
            flashcards={inotropicDrugs}
            groupTitle={"Inotropowe dodatnie"}
            onNavBack={this.onNavBack.bind(this)}
            isRandomFlashcards={this.state.isRandomFlashcards}
          />
        )
      case "Diuretics":
        return (
          <TaskList
            flashcards={diuretics}
            groupTitle={"Leki moczopędne"}
            onNavBack={this.onNavBack.bind(this)}
            isRandomFlashcards={this.state.isRandomFlashcards}
          />
        )
      case "BlockingCalcium":
        return (
          <TaskList
            flashcards={blockingCalcium}
            groupTitle={"Blokujące kan wapniowe"}
            onNavBack={this.onNavBack.bind(this)}
            isRandomFlashcards={this.state.isRandomFlashcards}
          />
        )
      default:
        return (
          <ScrollView
            style={styles.container}
            contentContainerStyle={this.props.route.getContentContainerStyle()}>

            {/*<View style={styles.headerContainer}>
              <Text style={styles.headerText}>
                Grupy
            </Text>
            </View>*/}

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
              onPress={this.onMeds2UpdatedStarted.bind(this)}
              style={styles.button}>
              <Text style={styles.buttonText}>
                Drugie aktualizacja
              </Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this.onMeds3Started.bind(this)}
              style={styles.button}>
              <Text style={styles.buttonText}>
                Trzecie
            </Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this.onParasympatheticStarted.bind(this)}
              style={styles.button}>
              <Text style={styles.buttonText}>
                Część przywspółczólna
                </Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this.onSymphateticPart1Started.bind(this)}
              style={styles.button}>
              <Text style={styles.buttonText}>
                Współczulny część 1
                </Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this.onBlockersStarted.bind(this)}
              style={styles.button}>
              <Text style={styles.buttonText}>
                b-blokery
                </Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this.onAnticogulantsStarted.bind(this)}
              style={styles.button}>
              <Text style={styles.buttonText}>
                Antykogulanty
                </Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this.onSteroidsStarted.bind(this)}
              style={styles.button}>
              <Text style={styles.buttonText}>
                Sterydy
                </Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this.onHypertensiveMedsStarted.bind(this)}
              style={styles.button}>
              <Text style={styles.buttonText}>
                W chorobie nadciśnieniowej
                </Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this.onInotropicDrugsStarted.bind(this)}
              style={styles.button}>
              <Text style={styles.buttonText}>
                O działaniu inotropowym dodatnim
                </Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this.onDiureticsStarted.bind(this)}
              style={styles.button}>
              <Text style={styles.buttonText}>
                Moczopędne
              </Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={this.onBlockingCalciumStarted.bind(this)}
              style={styles.button}>
              <Text style={styles.buttonText}>
                Blokujące kan wapniowe
              </Text>
            </TouchableHighlight>

            <View style={styles.checkboxContainer}>
              <CheckBox
                label='Losowa kolejność'
                checked={this.state.isRandomFlashcards}
                onChange={(checked) => this.setState({
                  isRandomFlashcards: !this.state.isRandomFlashcards
                })}
              />
            </View>

          </ScrollView>
        );
    };
  };

  onNavBack() {
    this.nav.pop();
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: "tasklist", index: 0 }}
        ref={((nav) => {
          this.nav = nav;
        })}
        renderScene={this.renderScene.bind(this)}
      />
    );
  };
};
