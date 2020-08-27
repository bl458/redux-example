import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button onPress={this.props.increment} title="Increase Count" />

        <Text>{this.props.count}</Text>

        <Button onPress={this.props.decrement} title="Decrease Count" />
      </View>
    );
  }
}

export default Counter;
