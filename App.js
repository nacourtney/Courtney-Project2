import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Button from "./button";
import { WebView } from "react-native-webview";
import {
  AssignmentButton1,
  AssignmentButton2,
  AssignmentButton3,
  AssignmentButton4,
  Danger,
  Info,
  Success,
} from "./button/styles";

const continents = [
  {
    title: "North America",
    link: "https://en.wikipedia.org/wiki/North_America",
    style: Success,
  },
  {
    title: "South America",
    link: "https://en.wikipedia.org/wiki/South_America",
    style: Info,
  },
  {
    title: "Africa",
    link: "https://en.wikipedia.org/wiki/Africa",
    style: Danger,
  },
  {
    title: "Europe",
    link: "https://en.wikipedia.org/wiki/Europe",
    style: AssignmentButton1,
  },
  {
    title: "Asia",
    link: "https://en.wikipedia.org/wiki/Asia",
    style: AssignmentButton2,
  },
  {
    title: "Antartica",
    link: "https://en.wikipedia.org/wiki/Antarctica",
    style: AssignmentButton3,
  },
  {
    title: "Australia",
    link: "https://en.wikipedia.org/wiki/Australia",
    style: AssignmentButton4,
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContinentIndex: 0,
    };
  }

  render() {
    const buttons = continents.map((continent, index) => {
      return (
        <Button
          buttonStyle={continent.style}
          key={continent.title}
          onPress={() => this.setState({ selectedContinentIndex: index })}
          title={continent.title}
        >
          {continent.title} ({index})
        </Button>
      );
    });

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView
          nestedScrollEnabled
          style={{ height: "100%" }}
          source={{ uri: continents[this.state.selectedContinentIndex].link }}
        ></WebView>
        <ScrollView style={{ flex: 0.5 }}>{buttons}</ScrollView>
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
  buttonContainer: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
});
