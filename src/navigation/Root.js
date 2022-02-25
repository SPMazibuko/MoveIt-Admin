//import libraries
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeNavigator from "./Home";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

// create a component
const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: "#ccc",
            width: 300,
          },
          overlayColor: "transparent",
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default RootNavigator;
