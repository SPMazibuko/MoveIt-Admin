import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import FormInput from "../components/FormInput";
import FormSubmitBtn from "../components/FormSubmitBtn";
import FormContainer from "../components/FormContainer";
import { Auth } from "aws-amplify";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function ConfirmSignUp({ navigation }) {
  const [username, setUsername] = useState("");
  const [authCode, setAuthCode] = useState("");

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, authCode);
      console.log("✅ Code confirmed");
      console.warn("✅ Code confirmed");
      navigation.navigate("Home");
    } catch (error) {
      console.log(
        "❌ Verification code does not match. Please enter a valid verification code.",
        error.code
      );
      console.warn(
        "❌Please enter a valid verification code/enter email as a username"
      );
    }
  }
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/Images/background/background1.jpeg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View
          style={{ flex: 0.5, alignContent: "center", alignItems: "center" }}
        >
          <Image
            style={{
              width: 130,
              height: 130,
              borderRadius: 120,
              marginTop: 10,
            }}
            source={require("../../assets/Images/logo/icon.jpeg")}
          />
        </View>
        <FormContainer>
          <FormInput
            value={username}
            onChangeText={(text) => setUsername(text)}
            leftIcon="account"
            placeholder="Enter username"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <FormInput
            value={authCode}
            onChangeText={(text) => setAuthCode(text)}
            placeholder="Enter verification code"
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={confirmSignUp}>
            <FormSubmitBtn title="Confirm Sign Up" />
          </TouchableOpacity>
        </FormContainer>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
});
