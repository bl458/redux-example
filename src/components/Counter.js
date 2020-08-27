import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

export default class Counter extends Component {
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
