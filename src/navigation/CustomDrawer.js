import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ backgroundColor: "#212121", padding: 15 }}>
        {/* User Row */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#cacaca",
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
            }}
          />

          <View>
            <Text style={{ color: "white", fontSize: 24 }}>Username</Text>
            <Text style={{ color: "lightgrey" }}>5.00 *</Text>
          </View>
        </View>

        {/* Messages Row */}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#919191",
            borderTopWidth: 1,
            borderTopColor: "#919191",
            paddingVertical: 5,
            marginVertical: 10,
          }}
        >
          <Pressable
            onPress={() => {
              console.warn("Messages");
            }}
          >
            <Text style={{ color: "#dddddd", paddingVertical: 5 }}>
              Messages
            </Text>
          </Pressable>
        </View>

        {/* Do more */}
        <Pressable
          onPress={() => {
            console.warn("Make Money Driving");
          }}
        >
          <Text style={{ color: "#dddddd", paddingVertical: 5 }}>
            Do more with your account
          </Text>
        </Pressable>

        {/* Make money */}
        <Pressable
          onPress={() => {
            console.warn("Make Money Driving");
          }}
        >
          <Text style={{ color: "white", paddingVertical: 5 }}>
            Make money driving
          </Text>
        </Pressable>
      </View>

      <DrawerItemList {...props} />

      {/* Make money */}
      <TouchableOpacity onPress={() => navigation.navigate("Rooms")}>
        <Text style={{ padding: 5, paddingLeft: 20 }}>My Rooms</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Delivery")}>
        <Text style={{ padding: 5, paddingLeft: 20 }}>My Deliveries</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ padding: 5, paddingLeft: 20 }}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ padding: 5, paddingLeft: 20 }}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
