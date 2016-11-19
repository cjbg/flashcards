import React from 'react';
import {
  ListView,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
 } from 'react-native';

import { TaskRow }  from './TaskRow';
import sleepMeds from '../assets/sleepMeds';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#F7F7F7',
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
});

export class TaskList extends React.Component{
  constructor(props, context){
    super(props, context);

    let flashCard = this.getRandomFlashCard();
    this.state = {
      currentFlashCard: flashCard,
    };
  };

  getFlashCard(randomNumber){
    let counter = 0;
    for (var key in sleepMeds) {
      if (counter === randomNumber) {
        return sleepMeds[key];
      };
      counter++;
    };
  };

  getRandomFlashCard(){
    let randomNumber = 0;
    let randomFlashCardName = "";
    let randomFlashCardLearned = false;
    let length = Object.keys(sleepMeds).length;

    do{
      randomNumber = this.getRandomNumber(length);
      randomFlashCard = this.getFlashCard(randomNumber);
    }
    while(randomFlashCard.learned == "true");

    return randomFlashCard.name;
  };

  setFlashCardLearned(flashCardName){
    sleepMeds[flashCardName].learned = "true";
  };

  getRandomNumber(length){
    return Math.floor((Math.random() * length) + 0);
  };

  allFlashCardsAnswered(){
    for (var key in sleepMeds) {
      if (sleepMeds[key].learned === false) {
        return false;
      };
    };
    return true;
  }

  onLearnedStarted(){

    if (this.state.currentFlashCard === "Kuniec") {
    }
    else {
      this.setFlashCardLearned(this.state.currentFlashCard);
      if (this.allFlashCardsAnswered()) {
        this.state.currentFlashCard = "Kuniec";
      }
      else {
        this.state.currentFlashCard = this.getRandomFlashCard();
      }
      this.forceUpdate();
    }
  };

  onNextStarted(){
    this.state.currentFlashCard = this.getRandomFlashCard();
    this.forceUpdate();
  };

  render() {
    return(
      <View>

        <TaskRow flashCard={this.state.currentFlashCard} />

        <TouchableHighlight
          onPress={this.onLearnedStarted.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Umiem
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.onNextStarted.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Następna
          </Text>
        </TouchableHighlight>
      </View>
    );
  };
};
