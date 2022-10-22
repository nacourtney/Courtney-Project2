import React, { Component } from "react";

import { TouchableOpacity, View, StyleSheet, Button } from "react-native";

import { Base, Default } from "./styles";

export default class ButtonClass extends Component {
  getTheme() {
    const { buttonStyle } = this.props;

    if (buttonStyle) {
      return buttonStyle;
    }

    return Default;
  }

  render() {
    const theme = this.getTheme();
    const { title, onPress, style, rounded } = this.props;

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
            >
              <Button
                title={title}
                onPress={onPress}
                style={[Base.label, theme.label]}
              ></Button>
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
