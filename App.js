import React, {Component} from 'react';
import { Button, StyleSheet, Text, View} from 'react-native';


export default class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>11*11</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <Button title="0"/>
              <Button title="0"/>
              <Button title="0"/>
            </View>
            <View style={styles.row}>
              <Button title="0"/>
              <Button title="0"/>
              <Button title="0"/>
            </View>
            <View style={styles.row}>
              <Button title="0"/>
              <Button title="0"/>
              <Button title="0"/>
            </View>
            <View style={styles.row}>
              <Button title="0"/>
              <Button title="0"/>
              <Button title="0"/>
            </View>
          </View>
          <View style={styles.operations}>
            <Button title="+" />
            <Button title="+" />
            <Button title="+" />
            <Button title="+" />
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 2,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  resultText: {
    fontSize: 30,
    color: "white"
  },
  calculation: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  calculationText: {
    fontSize: 24,
    color: "white"
  },
  buttons: {
    flex: 7,
    flexDirection: "row"
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  numbers: {
    flex: 3,
    backgroundColor: "yellow"
  },
  operations: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "black"
  }
});
