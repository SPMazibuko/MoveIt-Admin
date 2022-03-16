import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import Router from "./src/navigation/Root";
//<Router />;

import DriverHomeScreen from "./src/screens/DriverHomeScreen";
export default function App() {
  return (
    <SafeAreaView>
      <DriverHomeScreen />
    </SafeAreaView>
  );
}
