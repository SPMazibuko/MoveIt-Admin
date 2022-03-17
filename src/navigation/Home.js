//import libraries
import React, { useState, useEffect } from "react";

import HomeScreen from "../screens/HomeScreen";
import VehicleRegistration from "../screens/VehicleRegistration";
import Map from "../screens/Map";
import Delivery from "../screens/Delivery";
import RoomRegistration from "../screens/RoomRegistration";
import RoomInformation from "../screens/RoomInformation";
import MyRooms from "../screens/MyRooms";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import DeliveryInformation from "../screens/DeliveryInformation";
import Chats from "../screens/Chats";
import ConfirmSignUp from "../screens/ConfirmSignUp";
import DriverHomeScreen from "../screens/DriverHomeScreen";

const Stack = createStackNavigator();

// create a component
const HomeNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Delivery" component={Delivery} />
      <Stack.Screen name="Vehicle" component={VehicleRegistration} />
      <Stack.Screen name="RoomRegistration" component={RoomRegistration} />
      <Stack.Screen name="RoomsInformation" component={RoomInformation} />
      <Stack.Screen name="Rooms" component={MyRooms} />
      <Stack.Screen name="DeliveryInfo" component={DeliveryInformation} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} />
      <Stack.Screen name="DriverHomeScreen" component={DriverHomeScreen} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default HomeNavigator;
