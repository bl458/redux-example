import React, {Component} from 'react';
import {Button} from 'react-native';

export default class Counter extends Component {
  render() {
    return (
      <View>
        <Button onPress={this.props.increment} title="Increase Count" />

        <Text>{this.props.count}</Text>

        <Button onPress={this.props.decrement} title="Decrease Count" />
      </View>
    );
  }
}
