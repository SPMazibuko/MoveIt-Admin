import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";
import { useNavigation } from "@react-navigation/native";

import { Auth } from "aws-amplify";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  async function signUp() {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log("✅ Sign-up Confirmed");
      console.warn("✅ Sign-up Confirmed");
      navigation.navigate("ConfirmSignUp");
    } catch (error) {
      console.log("❌ Error signing up...", error);
      console.warn("❌ Error signing up...", error);
    }
  }

  return (
    <FormContainer>
      <FormInput
        autoCapitalize="none"
        title={"Username"}
        placeholder={"John"}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <FormInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Enter Email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <FormInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
      />
      <FormInput
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        placeholder="Confirm password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
      />

      <TouchableOpacity onPress={signUp}>
        <FormSubmitBtn title={"Sign Up"} />
      </TouchableOpacity>
    </FormContainer>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  picker: {
    borderWidth: 1,
    borderColor: "#ffffff",
    height: 35,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 2,
    marginBottom: 15,
    marginTop: 20,
  },
});
