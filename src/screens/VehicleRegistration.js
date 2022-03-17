import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { createVehicle } from "../grapql/mutations";
import Icon from "react-native-vector-icons/FontAwesome";

const myIcon = <Icon name="dot-circle-o" size={30} color="black" />;

const VehicleRegistration = ({ navigation }) => {
  const [regiNum, setRegiNum] = useState("");
  const [vinNum, setVinNum] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");

  const onRegister = async () => {
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
        RegistrationNumber: regiNum,
        VINNumber: vinNum,
        Manufacture: manufacture,
        Model: model,
        Year: year,
        type: type,
        createdAt: date.toISOString(),
        userId: authenticatedUser.attributes.sub,
      };
      const response = await API.graphql(
        graphqlOperation(createVehicle, {
          input,
        })
      );
      console.log(response);

      Alert.alert(
        "Vehicle Successfully Registered",
        "Thank you for being part of our team of drivers to help the world move their belongings",
        [
          {
            text: "GO ONLINE",
            onPress: () => {
              navigation.navigate("DriverHomeScreen");
            },
          },
        ]
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={require("../../assets/Images/background/back.jpeg")}
      >
        <View
          style={{
            height: 200,
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingBottom: 50,
          }}
        >
          <Text style={{ color: "white", fontSize: 45, fontWeight: "bold" }}>
            Vehicle Registration
          </Text>
        </View>

        <View
          style={{
            height: "100%",
            width: "100%",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "#eceff1aa",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 25,
                fontWeight: "700",
                textAlign: "center",
                width: 300,
                padding: 20,
              }}
            >
              Documantation Needed
            </Text>
            <View style={{ padding: 20 }}>
              <Text>
                {myIcon} {"  "} Operators Card( Double disk)
              </Text>
              <Text>
                {myIcon} {"  "} Operators Card( Double disk)
              </Text>
              <Text>
                {myIcon} {"  "} Operators Card( Double disk)
              </Text>
              <Text>
                {myIcon} {"  "} Operators Card( Double disk)
              </Text>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/*Registration Number */}
            <TextInput
              style={{
                backgroundColor: "white",
                height: 50,
                width: "85%",
                margin: 20,
                borderRadius: 10,
                padding: 10,
              }}
              placeholder="Registration Number"
              value={regiNum}
              onChangeText={(text) => setRegiNum(text)}
              autoCapitalize="none"
            />

            {/*VIN Number */}
            <TextInput
              style={{
                backgroundColor: "white",
                height: 50,
                width: "85%",
                margin: 20,
                borderRadius: 10,
                padding: 10,
              }}
              placeholder="VIN Number"
              value={vinNum}
              onChangeText={(text) => setVinNum(text)}
              autoCapitalize="none"
            />

            {/*Manufacture */}
            <TextInput
              style={{
                backgroundColor: "white",
                height: 50,
                width: "85%",
                borderRadius: 10,
                padding: 10,
              }}
              placeholder="Manufacturer"
              value={manufacture}
              onChangeText={(text) => setManufacture(text)}
              autoCapitalize="none"
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                margin: 20,
              }}
            >
              {/*Model of the vehicle*/}
              <TextInput
                style={{
                  backgroundColor: "white",
                  height: 50,
                  width: 180,
                  margin: 20,
                  textAlign: "center",
                  borderRadius: 10,
                }}
                placeholder="Model"
                value={model}
                onChangeText={(text) => setModel(text)}
                autoCapitalize="none"
              />

              <TextInput
                style={{
                  backgroundColor: "white",
                  height: 50,
                  width: 100,
                  margin: 20,
                  textAlign: "center",
                  borderRadius: 10,
                }}
                placeholder="Year"
                value={year}
                onChangeText={(text) => setYear(text)}
                autoCapitalize="none"
              />
            </View>
            {/*Type of vehicle being registered */}
            <TextInput
              style={{
                backgroundColor: "white",
                height: 50,
                width: "85%",
                borderRadius: 10,
                padding: 10,
              }}
              placeholder="Type"
              value={type}
              onChangeText={(text) => setType(text)}
              autoCapitalize="none"
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: 70,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#4E7CAA",
                width: "85%",
                height: 60,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={onRegister}
            >
              <Text
                style={{ fontSize: 30, fontWeight: "bold", color: "white" }}
              >
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default VehicleRegistration;
