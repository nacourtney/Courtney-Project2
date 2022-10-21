import React, { Component } from "react";
import { Alert, SafeAreaView, StyleSheet } from "react-native";
import Button from "./button";
export default class App extends React.Component {
  handleButtonPress() {
    Alert.alert("Alert", "You clicked this button!");
  }

  render() {
    return (
      <SafeAreaView styles={styles.container}>
        <Button success style={styles.button}>
          Success button
        </Button>
        <Button info style={styles.button}>
          Info button
        </Button>
        <Button
          danger
          rounded
          style={styles.button}
          onPress={this.handleButtonPress}
        >
          Rounded button
        </Button>
        <Button assignmentButton1 style={styles.button}>
          AssignmentButton1
        </Button>
        <Button assignmentButton2 style={styles.button}>
          AssignmentButton2
        </Button>
        <Button assignmentButton3 style={styles.button}>
          AssignmentButton3
        </Button>
        <Button assignmentButton4 style={styles.button}>
          AssignmentButton4
        </Button>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 15,
  },
});
