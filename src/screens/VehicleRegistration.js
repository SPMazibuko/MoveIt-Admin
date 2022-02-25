import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const myIcon = <Icon name="dot-circle-o" size={30} color="black" />;

const VehicleRegistration = () => {
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
            <TextInput
              style={{
                backgroundColor: "white",
                height: 50,
                width: "85%",
                borderRadius: 10,
                padding: 10,
              }}
              placeholder="Registration Number"
            />

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
            />

            <TextInput
              style={{
                backgroundColor: "white",
                height: 50,
                width: "85%",
                borderRadius: 10,
                padding: 10,
              }}
              placeholder="Manufacturer"
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                margin: 20,
              }}
            >
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
              />
            </View>
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
