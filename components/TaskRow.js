import React from 'react';
import{
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import sleepMeds from '../assets/sleepMeds';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: '300',
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#fff',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export class TaskRow extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      flashcard: this.props.todo
    };
  }

  onFlashcardPressed(){
    let flashcardText = sleepMeds[this.props.todo];
    console.log(flashcardText);
    this.state.flashcardtext = flashcardText.text;
    this.state.showFlashCard = true;
    this.forceUpdate();
  }

  render() {
    return(
      <View>
      <TouchableHighlight
          onPress={this.onFlashcardPressed.bind(this)}
          style={styles.button}>
          <Text style={styles.label}>
            {this.state.flashcard}
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
            style={styles.button}>
            <Text style={styles.label}>
              {this.state.flashcardtext}
            </Text>
          </TouchableHighlight>
          </View>
    );
  };
};
