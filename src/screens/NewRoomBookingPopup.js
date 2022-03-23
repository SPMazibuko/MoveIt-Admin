import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const NewRoomBookingPopup = ({ newBooking, onAccept, onDecline }) => {
  return (
    <View style={styles.root}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 150,
        }}
      >
        <Pressable onPress={onDecline} style={styles.declineButton}>
          <Text style={styles.declineText}>Decline</Text>
        </Pressable>

        <Pressable onPress={onAccept} style={styles.acceptButton}>
          <Text style={styles.acceptText}>Accept</Text>
        </Pressable>
      </View>
      <View style={styles.popupContainer}>
        <View style={styles.row}>
          <Text style={styles.roomType}>{newBooking.type}</Text>
          <View style={{ borderRadius: 100 }}>
            <Image
              source={require("../../assets/Images/profile.png")}
              resizeMode="contain"
              style={{ width: 60, height: 60, borderRadius: 100 }}
            />
          </View>
          <Text style={styles.roomType}>
            <AntDesign name={"star"} size={22} />
            {newBooking.user?.rating}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NewRoomBookingPopup;

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    width: "100%",
    bottom: 120,
    padding: 20,
    height: "100%",
    justifyContent: "space-between",
    backgroundColor: "#00000099",
  },
  popupContainer: {
    backgroundColor: "#000",
    borderRadius: 10,
    alignItems: "center",
    height: 120,
    justifyContent: "space-around",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  roomType: {
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
