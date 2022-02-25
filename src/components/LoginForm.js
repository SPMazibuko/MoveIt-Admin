import { TouchableOpacity } from "react-native";
import React from "react";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";
import { useNavigation } from "@react-navigation/native";

const LoginForm = () => {
  const navigation = useNavigation();
  return (
    <FormContainer>
      <FormInput title={"Email"} placeholder={"example@email.com"} />
      <FormInput title={"Password"} placeholder={"************"} />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <FormSubmitBtn title={"Login"} />
      </TouchableOpacity>
    </FormContainer>
  );
};

export default LoginForm;
