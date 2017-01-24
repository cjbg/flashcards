import React from "react";
import {
  ListView,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
 } from "react-native";

import { TaskRow }  from "./TaskRow";
import flashcardStyles from "../constants/FlashcardStyles";
import styles from "../constants/Styles.js";

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
    for (var key in this.props.flashcards) {
      if (counter === randomNumber) {
        return this.props.flashcards[key];
      };
      counter++;
    };
  };

  getRandomFlashCard(){
    let randomNumber = 0;
    let randomFlashCardName = "";
    let randomFlashCardLearned = false;
    let length = Object.keys(this.props.flashcards).length;

    do{
      randomNumber = this.getRandomNumber(length);
      randomFlashCard = this.getFlashCard(randomNumber);
    }
    while(randomFlashCard.learned == "true");

    return randomFlashCard;
  };

  setFlashCardLearned(flashCardName){
    this.props.flashcards[flashCardName].learned = "true";
  };

  getRandomNumber(length){
    return Math.floor((Math.random() * length) + 0);
  };

  allFlashCardsAnswered(){
    for (var key in this.props.flashcards) {
      if (this.props.flashcards[key].learned === false) {
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
    for (var key in this.props.flashcards) {
      this.props.flashcards[key].learned = false;
    };
  };


  onLearnedStarted(){
    if (this.state.showFlashcardName === false) {
      this.toggleFlashcard();
    }
    if (this.state.currentFlashCard === "Koniec") {
    }
    else {
      this.setFlashCardLearned(this.state.currentFlashCard);
      if (this.allFlashCardsAnswered()) {
        this.state.currentFlashCard = "Koniec";
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
    if (this.state.currentFlashCard !== "Koniec") {
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
        style={flashcardStyles.flashcardButton}>
          <Text style={flashcardStyles.label}>
            {this.state.currentFlashCard}
          </Text>
        </TouchableHighlight>
      );
    }
    else {
      return(
        <TouchableHighlight
          onPress={this.onFlashcardPressed.bind(this)}
          style={[flashcardStyles.flashcardButton, flashcardStyles.flashcardBackButton]}>
            <Text style={flashcardStyles.label}>
              {this.state.currentFlashCardText}
            </Text>
          </TouchableHighlight>
      );
    }
  }

  renderButtons(){
    if (this.state.currentFlashCard === "Koniec") {
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
          style={[styles.button, flashcardStyles.buttonLearned]}>
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

        <TouchableHighlight
          onPress={this.props.onNavBack.bind(this)}
          style={[styles.button, flashcardStyles.buttonExit]}>
          <Text style={styles.buttonText}>
            Zakończ
          </Text>
        </TouchableHighlight>
      </View>
      );
    }
  };

  renderTitle(){
    return(
        <Text style={flashcardStyles.smallText}>
          {this.props.groupTitle}
        </Text>
    );
  };

  render() {
    return(
      <View>
        {this.renderTitle()}
        {this.renderFlashcard()}
        {this.renderButtons()}
      </View>
    );
  };
};

TaskList.propTypes = {
  onNavBack:  React.PropTypes.func.isRequired,
  flashcards: React.PropTypes.object.isRequired,
  groupTitle: React.PropTypes.string.isRequired,
};
