//import libraries
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./Home";

const Drawer = createDrawerNavigator();

// create a component
const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

//make this component available to the app
export default RootNavigator;
