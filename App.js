import "react-native-gesture-handler";
import Router from "./src/navigation/Root";
import config from "./src/aws-exports";
import React, { useState, useEffect } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "./src/aws-exports";
Amplify.configure(awsconfig);

export default function App() {
  return <Router />;
}
