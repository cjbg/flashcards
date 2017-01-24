import { React } from "react";
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
    container: {
    flex: 1,
        paddingTop: 15,
    },
    button: {
        height: 45,
        borderColor: "#05A5D1",
        borderWidth: 2,
        backgroundColor: "#333",
        margin: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#FAFAFA",
        fontSize: 20,
        fontWeight: "600",
    },
    headerContainer: {
        alignItems: "flex-start",
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: "black",
    },
    headerText: {
        fontSize: 26,
    },
});
