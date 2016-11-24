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
    height: 45,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLearned: {
    borderColor: '#BCCBE0',
    backgroundColor: '#05A5D1',
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600',
  },
  label: {
   fontSize: 18,
   fontWeight: '300',
  },
  flashcardButton: {
   height: 370,
   borderColor: '#05A5D1',
   borderWidth: 4,
   backgroundColor: '#05A5D1',
   margin: 7,
   justifyContent: 'center',
   alignItems: 'center',
  },
  flashcardBackButton: {
    borderColor: '#42F59B',
    backgroundColor: '#42F59B',
  },
});

export class TaskList extends React.Component{
  constructor(props, context){
    super(props, context);

    let flashCard = this.getRandomFlashCard();
    this.state = {
      currentFlashCard: flashCard.name,
      currentFlashCardText: flashCard.text,
      flashcardLearned: "Umiem",
      showFlashcardName: true
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

    return randomFlashCard;
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

  toggleFlashcard(){
    this.setState({
      showFlashcardName: !this.state.showFlashcardName
    });
  }

  setRandomFlashcard(){
    let randomFlashcard = this.getRandomFlashCard();
    this.setState({currentFlashCard: randomFlashcard.name});
    this.setState({currentFlashCardText: randomFlashcard.text});
  };

  reloadFlashcards(){
    for (var key in sleepMeds) {
      sleepMeds[key].learned = false;
    };
  };


  onLearnedStarted(){
    if (this.state.showFlashcardName === false) {
      this.toggleFlashcard();
    }
    if (this.state.currentFlashCard === "Kuniec") {
    }
    else {
      this.setFlashCardLearned(this.state.currentFlashCard);
      if (this.allFlashCardsAnswered()) {
        this.state.currentFlashCard = "Kuniec";
      }
      else {
        this.setRandomFlashcard();
      }
      this.forceUpdate();
    }
  };

  onNextStarted(){
    this.setRandomFlashcard();
    if (this.state.showFlashcardName === false) {
      this.toggleFlashcard();
    }
    this.forceUpdate();
  };

  onFlashcardPressed(){
    if (this.state.currentFlashCard !== "Kuniec") {
      this.toggleFlashcard();
      this.forceUpdate();
    }
  };

  onReloadStarted(){
    this.reloadFlashcards();
    this.setRandomFlashcard();
    this.setState({
      showFlashcardName: true
    });
  };

  renderFlashcard(){
    if (this.state.showFlashcardName) {
      return(
      <TouchableHighlight
        onPress={this.onFlashcardPressed.bind(this)}
        style={styles.flashcardButton}>
          <Text style={styles.label}>
            {this.state.currentFlashCard}
          </Text>
        </TouchableHighlight>
      );
    }
    else {
      return(
        <TouchableHighlight
          onPress={this.onFlashcardPressed.bind(this)}
          style={[styles.flashcardButton, styles.flashcardBackButton]}>
            <Text style={styles.label}>
              {this.state.currentFlashCardText}
            </Text>
          </TouchableHighlight>
      );
    }
  }

  renderButtons(){
    if (this.state.currentFlashCard === "Kuniec") {
      return(
        <TouchableHighlight
          onPress={this.onReloadStarted.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Od nowa
          </Text>
        </TouchableHighlight>
      );
    }
    else {
      return(
      <View>
        <TouchableHighlight
          onPress={this.onLearnedStarted.bind(this)}
          style={[styles.button, styles.buttonLearned]}>
          <Text style={styles.buttonText}>
            {this.state.flashcardLearned}
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
    }
  };

  render() {
    return(
      <View>
        {this.renderFlashcard()}
        {this.renderButtons()}
      </View>
    );
  };
};
