import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";

import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Auth, API, graphqlOperation } from "aws-amplify";
import { getRoom, listRoomBookings } from "../grapql/queries";
import { updateRoom, updateRoomBooking } from "../grapql/mutations";
import NewRoomBookingPopup from "./NewRoomBookingPopup";

const LandLordHomeScreen = () => {
  const [room, setRoom] = useState(null);
  const [booking, setBooking] = useState(null);
  const [newBooking, setNewBooking] = useState([]);

  const fetchRoom = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const roomData = await API.graphql(
        graphqlOperation(getRoom, { id: userData.attributes.sub })
      );
      setRoom(roomData.data.getRoom);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBookings = async () => {
    try {
      const bookingsData = await API.graphql(
        graphqlOperation(listRoomBookings, {
          filter: { status: { eq: "NEW" } },
        })
      );
      setNewBooking(bookingsData.data.listRoomBookings.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRoom();
    fetchBookings();
  }, []);

  {
    /*Define on Decline booking function*/
  }
  const onDecline = () => {
    setNewBooking(newBooking.slice(1));
  };

  {
    /*Define on accept booking function*/
  }
  const onAccept = async (newBookings) => {
    try {
      const input = {
        id: newBookings.id,
        status: "ROOM_TAKEN",
        roomId: room.id,
      };
      const bookingData = await API.graphql(
        graphqlOperation(updateRoomBooking, { input })
      );
      setBooking(bookingData.data.updateRoomBooking);
    } catch (e) {
      console.log(e);
    }

    setNewBooking(newBooking.slice(1));
  };

  {
    /* Update Room availability*/
  }
  const onAvailablePressed = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const input = {
        id: userData.attributes.sub,
        isActive: !room.isActive,
      };
      const updatedRoomData = await API.graphql(
        graphqlOperation(updateRoom, { input })
      );
      setRoom(updatedRoomData.data.updateRoom);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={{ width: 360, height: 800 }}
        source={require("../../assets/Images/background/bg.png")}
      >
        <View>
          {/*ACTIVATE Button */}
          <TouchableOpacity
            onPress={onAvailablePressed}
            style={styles.goButton}
          >
            <Text style={styles.goText}>
              {room?.isActive ? "DE-ACTIVATE" : "ACTIVATE"}
            </Text>
          </TouchableOpacity>
        </View>
        {room?.isActive ? (
          <Text style={styles.bottomText}>Room Available</Text>
        ) : (
          <Text style={styles.bottomText}>Room not Available</Text>
        )}
        {/* New Vehicle booking popup */}
        {newBooking.length > 0 && !booking && (
          <NewRoomBookingPopup
            newBooking={newBooking[0]}
            onDecline={onDecline}
            onAccept={() => onAccept(newBooking[0])}
          />
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LandLordHomeScreen;

const styles = StyleSheet.create({
  goButton: {
    position: "absolute",
    backgroundColor: "#1495ff",
    width: 200,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    top: Dimensions.get("window").height / 2 - 10,
    left: Dimensions.get("window").width / 2 - 100,
  },
  goText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  roundButton: {
    position: "absolute",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 25,
  },
  bottomText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
    marginStart: 50,
    marginVertical: 77,
  },
});
