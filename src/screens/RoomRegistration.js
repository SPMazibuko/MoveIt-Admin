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
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";

import { API, graphqlOperation, Auth } from "aws-amplify";
import { createRoom } from "../grapql/mutations";

const provinceData = [
  { label: "Limpopo", value: "limpopo" },
  { label: "Gauteng", value: "gauteng" },
  { label: "Mpumalanga", value: "mpumalanga" },
  { label: "North West", value: "nw" },
  { label: "Western  Cape", value: "wc" },
  { label: "Easten Cape", value: "ec" },
  { label: "Northern cape", value: "nc" },
  { label: "Free State", value: "fs" },
  { label: "Kwazulu-Natal", value: "kzn" },
];

const roomTypeData = [
  { label: "Single Room", value: "Single" },
  { label: "Double Room", value: "Double" },
  { label: "Bachelor Room", value: "Bachelor" },
];

const RoomRegistration = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(false);
  const [province, setProvince] = useState(null); //value of the province
  const [town, setTown] = useState(null);
  const [houseNumber, setHouseNumber] = useState(null);
  const [streetName, setStreetName] = useState(null);
  const [suburb, setSuburb] = useState(null);
  const [zip, setZip] = useState(null);
  const [price, setPrice] = useState(null);
  const [type, setType] = useState(null);
  const [desc, setDesc] = useState(null);

  const onCreateRoom = async () => {
    try {
      const authenticatedUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (!authenticatedUser) {
        return;
      }
      console.log(authenticatedUser.attributes.sub);

      const date = new Date();
      const input = {
        id: authenticatedUser.attributes.sub,
        province: province,
        town: town,
        houseNumber: houseNumber,
        streetNumber: streetName,
        suburb: suburb,
        zipCode: zip,
        price: price,
        type: type,
        description: desc,
        userId: authenticatedUser.attributes.sub,
        //createdAt: date.toISOString(),
      };
      const response = await API.graphql(
        graphqlOperation(createRoom, {
          input,
        })
      );
      console.log(response);

      Alert.alert(
        "Room Successfully Registered",
        "Thank you for being part of our team of Landlords helping our users to get accommodations",
        [
          {
            text: "ACTIVATE",
            onPress: () => {
              navigation.navigate("LandlordHomeScreen");
            },
          },
        ]
      );
    } catch (error) {
      console.error(error);
    }
  };

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

            {/*Province dropdown*/}
            <View style={styles.View1}>
              <Dropdown
                style={styles.picker}
                data={provinceData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select province" : "..."}
                searchPlaceholder="Search..."
                value={province}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setProvince(item.value);
                  setIsFocus(false);
                }}
              />
              {/* Town */}
              <TextInput
                style={styles.Town}
                placeholder="Town"
                value={town}
                onChangeText={(text) => setTown(text)}
              />
            </View>

            <Text style={styles.Text3}>Address</Text>
            <View style={styles.View1}>
              {/* House Number */}
              <TextInput
                style={styles.picker}
                placeholder="House Number / Unit number"
                value={houseNumber}
                onChangeText={(text) => setHouseNumber(text)}
              />
              {/* Street Name */}
              <TextInput
                style={styles.Town}
                placeholder="Street Name"
                value={streetName}
                onChangeText={(text) => setStreetName(text)}
              />
            </View>
            <View style={styles.View1}>
              {/* Suburb */}
              <TextInput
                style={styles.picker}
                placeholder="Suburb"
                value={suburb}
                onChangeText={(text) => setSuburb(text)}
              />
              {/* Zip Code */}
              <TextInput
                style={styles.Town}
                placeholder="Zip Code"
                value={zip}
                onChangeText={(text) => setZip(text)}
              />
            </View>

            <Text style={styles.Text3}>Room Type</Text>
            <View style={styles.View1}>
              {/* types of rooms */}
              <View style={styles.roomTypeDropdown}>
                <Dropdown
                  style={styles.roomDropdownPicker}
                  data={roomTypeData}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? "Select Room" : "..."}
                  searchPlaceholder="Search..."
                  value={type}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    setType(item.value);
                    setIsFocus(false);
                  }}
                />
              </View>
              <View style={styles.View2}>
                <Text>Image</Text>
                <Icon name="pluscircle" size={20} />
              </View>
            </View>
            {/* Description */}
            <TextInput
              style={styles.description}
              placeholder="Description"
              value={desc}
              onChangeText={(text) => setDesc(text)}
            />
            {/* Price */}
            <TextInput
              style={styles.description}
              placeholder="Room Price"
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
            <View>
              <TouchableOpacity style={styles.button} onPress={onCreateRoom}>
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
  roomDropdownPicker: {
    width: 230,
  },
  roomTypeDropdown: {
    borderWidth: 1,
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: "white",
    paddingLeft: 10,
  },
});
export default RoomRegistration;
