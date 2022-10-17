import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import Button from "./button";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "sam", contact: "9999" },
        {
          name: "abc",
          contact: "123",
        },
        {
          name: "xyz",
          contact: "789",
        },
      ],
    };
  }
  handleButtonPress() {
    Alert.alert("Alert", "You clicked this button!");
  }

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.button}>My first button</Button>
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
      </View>
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
