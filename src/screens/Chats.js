import React from "react";
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import AntDesig from "react-native-vector-icons/AntDesign";
import AntDesi from "react-native-vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";

const Chats = () => {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View
          style={{
            marginTop: 50,
            fontSize: 50,
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <AntDesi name="message1" size={40} color="#1976d2" />
          <Text style={{ fontSize: 50, marginLeft: 10 }}>Chats</Text>
        </View>

        <View style={{ height: 65 + 0 }}>
          <View
            style={{
              alignItems: "center",
              marginTop: 30,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                backgroundColor: "gray",
                borderRadius: 50,
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 20,
              }}
            >
              <AntDesign name="user" size={30} color="black" />
            </View>
            <View
              style={{
                height: 50,
                marginLeft: 10,
                padding: 10,
                backgroundColor: "#cfd8dc",
                borderRadius: 50,
                width: "80%",
              }}
            >
              <Text style={{ fontSize: 20 }}>Hellow where are you?</Text>
            </View>
          </View>

          <View
            style={{
              alignItems: "center",
              marginTop: 10,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                height: 50,
                marginLeft: 10,
                padding: 10,
                backgroundColor: "#bbdefb",
                borderRadius: 50,
                width: "80%",
              }}
            >
              <Text style={{ fontSize: 20 }}>I’m on my way.</Text>
            </View>
            <View
              style={{
                backgroundColor: "#e3f2fd",
                borderRadius: 50,
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10,
              }}
            >
              <AntDesign name="user" size={30} color="black" />
            </View>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={{
              backgroundColor: "#e0e0e0",
              height: 50,
              width: "90%",
              borderRadius: 20,
              fontSize: 25,
              padding: 10,
              marginTop: 350,
            }}
            maxLength={40}
            placeholder="type something......"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Chats;
