import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function FormSubmitBtn({ title }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: "rgba(20,105,155,0.5)",
    borderRadius: 8,
    borderColor: "black",
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 60,
  },
  title: {
    fontWeight: "bold",
    fontSize: 21,
    color: "white",
    padding: 10,
    height: 50,
    alignSelf: "center",
    alignItems: "center",
  },
});
