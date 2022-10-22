import { StyleSheet } from "react-native";

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
    width: "75%",
    alignSelf: "center",
    margin: 10,
  },
});

const Info = StyleSheet.create({
  main: {
    backgroundColor: "#3498db",
    width: "75%",
    alignSelf: "center",
    margin: 10,
  },
});

const Success = StyleSheet.create({
  main: {
    backgroundColor: "#1abc9c",
    width: "75%",
    alignSelf: "center",
    margin: 10,
  },
});

const Default = StyleSheet.create({
  main: {
    backgroundColor: "rgba(0 ,0 ,0, 0)",
    width: "75%",
    alignSelf: "center",
    margin: 10,
    width: "75%",
    alignSelf: "center",
    margin: 10,
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
    width: "75%",
    alignSelf: "center",
    margin: 10,
  },
  label: {
    color: "orange",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "transparent",
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
    width: "75%",
    alignSelf: "center",
    margin: 10,
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
    width: "75%",
    alignSelf: "center",
    margin: 10,
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
    width: "75%",
    alignSelf: "center",
    margin: 10,
  },
  label: {
    color: "#ff0090",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "transparent",
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
