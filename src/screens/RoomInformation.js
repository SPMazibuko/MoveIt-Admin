import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const RoomInformation = () => {
  return (
    <ScrollView>
      <ImageBackground
        style={{ width: "100%" }}
        source={require("../../assets/Images/background/bg.png")}
      >
        <View style={styles.top}>
          <Image
            style={styles.pic}
            source={require("../../assets/Images/p.jpg")}
          />
          <Text style={styles.Text1}>Pfano Muleya</Text>
        </View>
        <View style={styles.View}>
          <View style={styles.View2}>
            <Text style={styles.Text2}>Gender:</Text>
            <Text style={styles.Text3}>Male</Text>
          </View>
          <View style={styles.View2}>
            <Text style={styles.Text2}>Age:</Text>
            <Text style={styles.Text3}>25</Text>
          </View>
          <View style={styles.View2}>
            <Text style={styles.Text2}>Payment method:</Text>
            <Text style={styles.Text3}>cash</Text>
          </View>

          <Text style={styles.Room}>Room Information</Text>
          <Image
            style={{ width: 300, height: 200, margin: 10 }}
            source={require("../../assets/Images/Tower-room-web.jpg")}
          />
          <View style={styles.View2}>
            <Text style={styles.Text2}>Room Type: </Text>
            <Text style={styles.Text3}>Single Room</Text>
          </View>
          <View style={styles.View2}>
            <Text style={styles.Text2}>Location:</Text>
            <Text style={styles.Text3}>Mamelodi</Text>
          </View>
          <View style={styles.View2}>
            <Text style={styles.Text2}>size:</Text>
            <Text style={styles.Text3}>5m X 3m</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default RoomInformation;

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
  },
  pic: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  Text1: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
    paddingRight: 20,
  },
  View: {
    backgroundColor: "#f7fbfdaa",
    height: 600,
    marginTop: 10,
    padding: 20,
    borderRadius: 20,
  },
  View2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  Text2: {
    fontWeight: "bold",
    fontSize: 15,
  },
  Text3: {
    fontSize: 15,
    fontWeight: "bold",
    color: "gray",
    paddingRight: 5,
  },
  Room: {
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 35,
    margin: 5,
  },
  button: {
    backgroundColor: "#1cb2f5",
    width: 310,
    height: 50,
    borderRadius: 10,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
