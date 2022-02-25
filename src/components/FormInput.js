import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function FormInput({ placeholder, title }) {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="rgba(232, 232, 232, 0.61)"
        style={styles.input}
      />
    </>
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
