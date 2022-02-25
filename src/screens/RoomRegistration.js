import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";
import RoomType from "../components/RoomType";

const data = [
  { label: "Limpopo", value: "1" },
  { label: "Gauteng", value: "2" },
  { label: "Mpumalanga", value: "3" },
  { label: "North West", value: "4" },
  { label: "Western  Cape", value: "5" },
  { label: "Easten Cape", value: "6" },
  { label: "Northern cape", value: "7" },
  { label: "Free State", value: "8" },
  { label: "Kwazulu-Natal", value: "9" },
];

const RoomRegistration = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          style={{ width: 360, height: 800 }}
          source={require("../../assets/Images/background/bg.png")}
        >
          <Text style={styles.Text}>Room</Text>
          <Text style={styles.Text2}> Registration</Text>
          <View style={styles.back}>
            <Text style={styles.heading}>please provide information</Text>
            <Text style={styles.heading}>about your rooms.</Text>

            <View style={styles.View1}>
              <Dropdown
                style={styles.picker}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select province" : "..."}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
              <TextInput style={styles.Town} placeholder="Town" />
            </View>

            <Text style={styles.Text3}>Address</Text>
            <View style={styles.View1}>
              <TextInput style={styles.picker} placeholder="House Number" />
              <TextInput style={styles.Town} placeholder="Street Name" />
            </View>
            <View style={styles.View1}>
              <TextInput style={styles.picker} placeholder="Surburb" />
              <TextInput style={styles.Town} placeholder="Zip Code" />
            </View>

            <Text style={styles.Text3}>Room Type</Text>
            <View style={styles.View1}>
              <RoomType style={styles.Dropdown} />
              <View style={styles.View2}>
                <Text>Image</Text>
                <Icon name="pluscircle" size={20} />
              </View>
            </View>

            <TextInput style={styles.description} placeholder="Description" />
            <View>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
                >
                  REGISTER
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 70,
    paddingLeft: 120,
    color: "white",
  },

  Text2: {
    fontWeight: "bold",
    fontSize: 40,
    paddingLeft: 50,
    marginBottom: 10,
    margin: 10,
    color: "white",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    paddingLeft: 20,
    margin: 5,
  },
  back: {
    backgroundColor: "#f7fbfdaa",
    width: 360,
    height: 550,
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
  },

  click: {
    borderRadius: 20,
    width: 300,
    height: 200,
    marginTop: 20,
  },
  description: {
    width: 310,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    marginTop: 15,
    paddingLeft: 5,
    marginLeft: 10,
  },
  View1: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  picker: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
    backgroundColor: "white",
  },
  Town: {
    width: 150,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
    backgroundColor: "white",
  },

  button: {
    backgroundColor: "#1cb2f5",
    width: 310,
    height: 50,
    marginTop: 15,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  View2: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  Text3: {
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 15,
    margin: 5,
  },
});
export default RoomRegistration;
