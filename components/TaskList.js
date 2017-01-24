import React from "react";
import {
  ListView,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from "react-native";

import { TaskRow } from "./TaskRow";
import flashcardStyles from "../constants/FlashcardStyles";
import styles from "../constants/Styles.js";

export class TaskList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentFlashcard: "",
      currentFlashcardText: "",
      currentFlashcardNumber: 0,
      flashcardLearned: "Umiem",
      showFlashcardName: true,
    };

    let flashcard = this.getFlashcard();
    this.state.currentFlashcard = flashcard.name;
    this.state.currentFlashcardText = flashcard.text;
  };

  getFlashcard() {
    if (this.props.isRandomFlashcards) {
      return this.getRandomFlashcard();
    }
    else {
      return this.getNextFlashcard();
    }
  };

  getSelectedFlashCard(randomNumber) {
    let counter = 0;
    for (var key in this.props.flashcards) {
      if (counter === randomNumber) {
        return this.props.flashcards[key];
      };

      counter++;
    };
  };

  getNextFlashcard() {
    let length = Object.keys(this.props.flashcards).length;

    do {
      flashcard = this.getSelectedFlashCard(this.state.currentFlashcardNumber);
      
      if (this.state.currentFlashcardNumber === length - 1) {
        this.state.currentFlashcardNumber = 0;
      }
      else {
        this.state.currentFlashcardNumber = this.state.currentFlashcardNumber + 1;
      }
    }
    while (flashcard.learned == "true");

    return flashcard;
  };

  getRandomFlashcard() {
    let randomNumber = 0;
    let length = Object.keys(this.props.flashcards).length;

    do {
      randomNumber = this.getRandomNumber(length);
      randomFlashCard = this.getSelectedFlashCard(randomNumber);
    }
    while (randomFlashCard.learned == "true");

    return randomFlashCard;
  };

  setFlashCardLearned(flashCardName) {
    this.props.flashcards[flashCardName].learned = "true";
  };

  getRandomNumber(length) {
    return Math.floor((Math.random() * length) + 0);
  };

  allFlashCardsAnswered() {
    for (var key in this.props.flashcards) {
      if (this.props.flashcards[key].learned === false) {
        return false;
      };
    };
    return true;
  }

  toggleFlashcard() {
    this.setState({
      showFlashcardName: !this.state.showFlashcardName
    });
  }

  setFlashcard() {
    let randomFlashcard = this.getFlashcard();
    this.setState({ currentFlashcard: randomFlashcard.name });
    this.setState({ currentFlashcardText: randomFlashcard.text });
  };

  reloadFlashcards() {
    for (var key in this.props.flashcards) {
      this.props.flashcards[key].learned = false;
    };
  };


  onLearnedStarted() {
    if (this.state.showFlashcardName === false) {
      this.toggleFlashcard();
    }
    if (this.state.currentFlashcard === "Koniec") {
    }
    else {
      this.setFlashCardLearned(this.state.currentFlashcard);
      if (this.allFlashCardsAnswered()) {
        this.state.currentFlashcard = "Koniec";
      }
      else {
        this.setFlashcard();
      }
      this.forceUpdate();
    }
  };

  onNextStarted() {
    this.setFlashcard();
    if (this.state.showFlashcardName === false) {
      this.toggleFlashcard();
    }
    this.forceUpdate();
  };

  onFlashcardPressed() {
    if (this.state.currentFlashcard !== "Koniec") {
      this.toggleFlashcard();
      this.forceUpdate();
    }
  };

  onReloadStarted() {
    this.reloadFlashcards();
    this.setFlashcard();
    this.setState({
      showFlashcardName: true
    });
  };

  renderFlashcard() {
    if (this.state.showFlashcardName) {
      return (
        <TouchableHighlight
          onPress={this.onFlashcardPressed.bind(this)}
          style={flashcardStyles.flashcardButton}>
          <Text style={flashcardStyles.label}>
            {this.state.currentFlashcard}
          </Text>
        </TouchableHighlight>
      );
    }
    else {
      return (
        <TouchableHighlight
          onPress={this.onFlashcardPressed.bind(this)}
          style={[flashcardStyles.flashcardButton, flashcardStyles.flashcardBackButton]}>
          <Text style={flashcardStyles.label}>
            {this.state.currentFlashcardText}
          </Text>
        </TouchableHighlight>
      );
    }
  }

  renderButtons() {
    if (this.state.currentFlashcard === "Koniec") {
      return (
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
      return (
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

  renderTitle() {
    return (
      <Text style={flashcardStyles.smallText}>
        {this.props.groupTitle}
      </Text>
    );
  };

  render() {
    return (
      <View>
        {this.renderTitle()}
        {this.renderFlashcard()}
        {this.renderButtons()}
      </View>
    );
  };
};

TaskList.propTypes = {
  onNavBack: React.PropTypes.func.isRequired,
  flashcards: React.PropTypes.object.isRequired,
  groupTitle: React.PropTypes.string.isRequired,
  isRandomFlashcards: React.PropTypes.bool.isRequired,
};
