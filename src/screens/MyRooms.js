import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const MyRooms = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <ScrollView>
        <ImageBackground
          style={{ width: "100%" }}
          source={require("../../assets/Images/background/bg.png")}
        >
          <Text style={styles.MyRooms}>My Rooms & Requests</Text>
          <View style={styles.View1}>
            <Text style={styles.Room}>My Rooms</Text>
            <View style={styles.View2}>
              <View style={styles.ViewRoom}>
                <View style={styles.info}>
                  <Image
                    style={{
                      width: 80,
                      height: 70,
                      borderRadius: 10,
                    }}
                    source={require("../../assets/Images/Tower-room-web.jpg")}
                  />
                  <View style={styles.info1}>
                    <Text>Single Room</Text>

                    <Text>Mamelody</Text>
                    <Text>5m X 3m</Text>
                  </View>
                </View>
              </View>
              <View style={styles.ViewRoom}>
                <View style={styles.info}>
                  <Image
                    style={{
                      width: 80,
                      height: 70,
                      borderRadius: 10,
                    }}
                    source={require("../../assets/Images/standard-double-room.jpg")}
                  />
                  <View>
                    <View style={styles.info1}>
                      <Text>Double Room</Text>
                      <Text>Tembisa</Text>
                      <Text>10m X 5m</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <Text style={styles.Room}>Requests</Text>
            <View style={styles.ViewRequest}>
              <TouchableOpacity
                onPress={() => navigation.navigate("RoomsInformation")}
                style={styles.pending}
              >
                <Text style={styles.Text1}>Pending Room Request</Text>
                <Text style={styles.Text2}>by pfano muleya</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyRooms;

const styles = StyleSheet.create({
  MyRooms: {
    fontSize: 36,
    fontWeight: "bold",
    padding: 10,
    marginTop: 50,
    color: "white",
    alignItems: "center",
  },
  View1: {
    borderRadius: 15,
    backgroundColor: "#f7fbfdaa",
    width: 350,
    height: 600,
    marginTop: 50,
    padding: 20,
  },
  Room: {
    fontWeight: "bold",
    fontSize: 20,
  },
  View2: {
    //borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 200,
    backgroundColor: "white",
  },
  ViewRoom: {
    borderWidth: 1,
    borderRadius: 10,
    width: 270,
    height: 80,
    backgroundColor: "#F6F6F6",
    margin: 10,
  },
  ViewRequest: {
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 150,
    backgroundColor: "white",
  },
  pending: {
    borderWidth: 1,
    width: 260,
    height: 60,
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  Text1: {
    fontWeight: "bold",
    fontSize: 15,
  },
  Text2: {
    color: "gray",
    fontWeight: "bold",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 80,
    margin: 5,
  },
});
