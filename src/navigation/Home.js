//import libraries
import React, { useState, useEffect } from "react";

import HomeScreen from "../screens/HomeScreen";
import VehicleRegistration from "../screens/VehicleRegistration";
import Map from "../screens/Map";
import Delivery from "../screens/Delivery";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";

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
    </Stack.Navigator>
  );
};

//make this component available to the app
export default HomeNavigator;
