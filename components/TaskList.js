import React from 'react';
import {
  ListView,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
 } from 'react-native';

import { TaskRow }  from './TaskRow'

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

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    };
  }

  renderRow(todo){
    return(
      <TaskRow todo={todo} />
    );
  }

  render() {
    return(
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
          style={styles.container}
        />

        <TouchableHighlight
          onPress={this.props.onAddStarted}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Add one
          </Text>
        </TouchableHighlight>
      </View>
    );
  };
};

TaskList.propTypes = {
  onAddStarted: React.PropTypes.func.isRequired,
  todos: React.PropTypes
          .arrayOf(React.PropTypes.object).isRequired,
}
