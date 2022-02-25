import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
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
              onPress={() => navigation.navigate("Vehicle")}
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
