import { DatePickerAndroid, StyleSheet } from "react-native";

const Base = StyleSheet.create({
  main: {
    padding: 10,
    borderRadius: 3,
  },
  label: {
    color: "#fff",
  },
  rounded: {
    borderRadius: 20,
  },
});

const Danger = StyleSheet.create({
  main: {
    backgroundColor: "#e74c3c",
  },
});

const Info = StyleSheet.create({
  main: {
    backgroundColor: "#3498db",
  },
});

const Success = StyleSheet.create({
  main: {
    backgroundColor: "#1abc9c",
  },
});

const Default = StyleSheet.create({
  main: {
    backgroundColor: "rgba(0 ,0 ,0, 0)",
  },
  label: {
    color: "#333",
  },
});

const AssignmentButton1 = StyleSheet.create({
  main: {
    borderRadius: 25,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: "deeppink",
    shadowColor: "black",
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 25, height: 13 },
  },
});

const AssignmentButton2 = StyleSheet.create({
  main: {
    borderRadius: 25,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: "#212a94",
    shadowColor: "#212a94",
    shadowOpacity: 0.5,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: -25, height: 13 },
    borderRadius: 0,
  },
});

const AssignmentButton3 = StyleSheet.create({
  main: {
    borderRadius: 25,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: "#275935",
    borderRadius: 0,
    borderWidth: 5,
    borderStyle: "dashed",
    borderColor: "red",
  },
});

const AssignmentButton4 = StyleSheet.create({
  main: {
    borderRadius: 25,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: "#000000",
    borderRadius: 0,
    borderWidth: 5,
    borderStyle: "solid",
    borderBottomEndRadius: 30,
    borderTopLeftRadius: 30,
    borderColor: "#ff0090",
  },
});

export {
  Base,
  Danger,
  Info,
  Success,
  Default,
  AssignmentButton1,
  AssignmentButton2,
  AssignmentButton3,
  AssignmentButton4,
};
