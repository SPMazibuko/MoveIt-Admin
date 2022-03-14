import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function FormInput({ ...otherProps }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#6e6869"
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ffffff",
    height: 45,
    width: "95%",
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 15,
    color: "white",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    paddingBottom: 5,
  },
});
