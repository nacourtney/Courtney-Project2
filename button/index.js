import React, { Component } from "react";

import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

import {
  Base,
  Default,
  Danger,
  Info,
  Success,
  AssignmentButton1,
  AssignmentButton2,
  AssignmentButton3,
  AssignmentButton4,
} from "./styles";

export default class Button extends Component {
  getTheme() {
    const {
      danger,
      info,
      success,
      assignmentButton1,
      assignmentButton2,
      assignmentButton3,
      assignmentButton4,
    } = this.props;

    if (info) {
      return Info;
    }

    if (success) {
      return Success;
    }

    if (danger) {
      return Danger;
    }
    if (assignmentButton1) {
      return AssignmentButton1;
    }
    if (assignmentButton2) {
      return AssignmentButton2;
    }
    if (assignmentButton3) {
      return AssignmentButton3;
    }
    if (assignmentButton4) {
      return AssignmentButton4;
    }
    return Default;
  }

  render() {
    const theme = this.getTheme();
    const { children, onPress, style, rounded } = this.props;

    return (
      <View style={styles.list}>
        <View>
          {
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                Base.main,
                theme.main,
                rounded ? Base.rounded : null,
                style,
              ]}
              onPress={onPress}
            >
              <Text style={[Base.label, theme.label]}>{children}</Text>
            </TouchableOpacity>
          }
        </View>
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
