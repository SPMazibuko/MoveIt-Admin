import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";
import { useNavigation } from "@react-navigation/native";

const SignUpForm = () => {
  //const [pickerValue, setPickerValue] = useState('None')
  const navigation = useNavigation();
  return (
    <FormContainer>
      <FormInput title={"Full Name"} placeholder={"John Vilakazi"} />
      <FormInput title={"Email"} placeholder={"example@email.com"} />
      <FormInput title={"Password"} placeholder={"************"} />
      <FormInput title={"Confirm Password"} placeholder={"************"} />
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
