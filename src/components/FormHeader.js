import React from "react";
import { View, StyleSheet, Text, Animated } from "react-native";

const FormHeader = ({ leftHeading, rightHeading, subHeading }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>{leftHeading}</Text>
        <Text style={styles.heading}>{rightHeading}</Text>
      </View>
      <Text style={styles.subHeading}>{subHeading}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: { fontSize: 40, fontWeight: "bold", color: "white" },
  subHeading: {
    fontSize: 28,
    color: "#1b1b33",
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default FormHeader;
