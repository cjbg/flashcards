import React from 'react';
import{
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

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

export class TaskForm extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      task: ''
    };
  };

  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.container} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.props.onBackStarded}>
          <Text style={styles.buttonText}>
            Back
          </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
