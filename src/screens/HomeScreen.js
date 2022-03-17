import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { getVehicleId } from "../grapql/queries";

import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import config from "../aws-exports";
Amplify.configure(config);

const HomeScreen = ({ navigation }) => {
  const onDriverButtonPressed = () => {
    Alert.alert(
      "Accessing the Driver Portal",
      "Do you have a car registered with us?",
      [
        {
          text: "YES",
          onPress: () => {
            navigation.navigate("DriverHomeScreen");
          },
        },
        {
          text: "NO",
          onPress: () => {
            navigation.navigate("Vehicle");
          },
        },
      ]
    );
  };
  const updateUserCar = async () => {
    //get authenticated user
    const authenticatedUser = await Auth.currentAuthenticatedUser({
      bypassCache: true,
    });
    if (!authenticatedUser) {
      return;
    }
    console.log(authenticatedUser.attributes.sub);

    //check if the user has a car
    const vehicleData = await API.graphql(
      graphqlOperation(getVehicleId, { id: authenticatedUser.attributes.sub })
    );

    if (!!vehicleData.data.getVehicle) {
      console.log("User already owns a vehicle");
      return;
    }
    //if not, create a new car for the user
    const newVehicle = {
      id: authenticatedUser.attributes,
      RegistrationNumber: "please word",
      VINNumber: "4652",
      Manufacture: "Kunzima",
      Model: "Not",
      Year: "2000",
      type: "Bakkie",
      userId: authenticatedUser.attributes,
    };
    await API.graphql(graphqlOperation(createVehicle, { newVehicle }));
  };

  return (
    <ScrollView>
      <View
        style={{ justifyContent: "center", alignItems: "center", padding: 20 }}
      >
        <Image
          style={{ width: "85%", resizeMode: "contain" }}
          source={require("../../assets/Images/top.jpeg")}
        />
      </View>

      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "black",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            padding: 10,
            fontSize: 20,
            textAlign: "center",
            width: 320,
          }}
        >
          Covid-19 regulations must be followed when using our service
        </Text>

        <View
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "white",
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, padding: 15 }}>
            Sign in to your admin system
          </Text>

          <View
            style={{
              width: "100%",
              height: 200,
              alignItems: "center",
              padding: 15,
            }}
          >
            <Image
              style={{ width: "80%", height: 170, borderRadius: 20 }}
              source={require("../../assets/Images/driver.jpg")}
            />

            <TouchableOpacity
              style={{
                backgroundColor: "#127AB8",
                position: "absolute",
                width: 120,
                height: 45,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                top: 160,
              }}
              onPress={onDriverButtonPressed}
            >
              <Text
                style={{ fontSize: 25, fontWeight: "bold", color: "white" }}
              >
                Driver
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: "100%",
              height: 180,
              alignItems: "center",
              padding: 15,
            }}
          >
            <Image
              style={{ width: "80%", height: 170, borderRadius: 20 }}
              source={require("../../assets/Images/fam1.jpg")}
            />

            <TouchableOpacity
              style={{
                backgroundColor: "#127AB8",
                position: "absolute",
                width: 120,
                height: 45,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
                top: 160,
              }}
              onPress={() => navigation.navigate("RoomRegistration")}
            >
              <Text
                style={{ fontSize: 25, fontWeight: "bold", color: "white" }}
              >
                Landlord
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
