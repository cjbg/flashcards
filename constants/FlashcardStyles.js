import { React } from "react";
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#F7F7F7",
  },
  buttonExit: {
    backgroundColor: "red",
  },
  buttonLearned: {
    borderColor: "#BCCBE0",
    backgroundColor: "#05A5D1",
  },
  label: {
    fontSize: 16,
    fontWeight: "300",
  },
  flashcardButton: {
    height: 370,
    borderColor: "#05A5D1",
    borderWidth: 4,
    backgroundColor: "#05A5D1",
    margin: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  flashcardBackButton: {
    borderColor: "#42F59B",
    backgroundColor: "#42F59B",
  },
  smallText: {
    fontSize: 10,
  },
});