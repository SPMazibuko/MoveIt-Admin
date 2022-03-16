import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

import AntDesign from "react-native-vector-icons/AntDesign";

const NewVehicleBookingPopUp = ({
  newBooking,
  onAccept,
  onDecline,
  duration,
  distance,
}) => {
  return (
    <View style={styles.root}>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Pressable onPress={onDecline} style={styles.declineButton}>
          <Text style={styles.declineText}>Decline</Text>
        </Pressable>

        <Pressable onPress={onAccept} style={styles.acceptButton}>
          <Text style={styles.acceptText}>Accept</Text>
        </Pressable>
      </View>
      <View style={styles.popupContainer}>
        <View style={styles.row}>
          <Text style={styles.vehicleType}>{newBooking.type}</Text>
          <View style={{ borderRadius: 100 }}>
            <Image
              source={require("../../assets/Images/profile.png")}
              resizeMode="contain"
              style={{ width: 60, height: 60, borderRadius: 100 }}
            />
          </View>
          <Text style={styles.vehicleType}>
            <AntDesign name={"star"} size={22} />
            {newBooking.user.rating}
          </Text>
        </View>

        <Text style={styles.minutes}> {duration} Min</Text>
        <Text style={styles.distance}> {distance} km</Text>
      </View>
    </View>
  );
};

export default NewVehicleBookingPopUp;

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    width: "100%",
    bottom: 10,
    padding: 20,
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "#00000099",
  },
  popupContainer: {
    backgroundColor: "#000",
    borderRadius: 10,
    alignItems: "center",
    height: 240,
    justifyContent: "space-around",
  },
  minutes: {
    color: "lightgrey",
    fontSize: 36,
  },
  distance: {
    color: "lightgrey",
    fontSize: 26,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  vehicleType: {
    color: "lightgrey",
    fontSize: 20,
    marginHorizontal: 10,
  },
  declineButton: {
    backgroundColor: "#000",
    padding: 20,
    borderRadius: 50,
    width: 100,
    alignItems: "center",
  },
  declineText: {
    color: "#fff",
    fontWeight: "bold",
  },
  acceptButton: {
    backgroundColor: "#000",
    padding: 20,
    borderRadius: 50,
    width: 100,
    alignItems: "center",
  },
  acceptText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
