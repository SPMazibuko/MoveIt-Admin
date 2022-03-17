import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  async function signIn() {
    try {
      await Auth.signIn(username, password);
      console.log("✅ Success");
      navigation.navigate("Home");
    } catch (error) {
      console.log("❌ Error signing in...", error);
    }
  }

  return (
    <FormContainer>
      <FormInput
        title={"Username"}
        placeholder={"pfano"}
        value={username}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize="none"
      />

      <FormInput
        title={"Password"}
        placeholder={"************"}
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        textContentType="password"
      />

      <TouchableOpacity>
        <Text style={{ color: "#009387", fontSize: 18, paddingBottom: 20 }}>
          Forgot password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={signIn}>
        <FormSubmitBtn title={"Login"} />
      </TouchableOpacity>
    </FormContainer>
  );
};

export default LoginForm;
