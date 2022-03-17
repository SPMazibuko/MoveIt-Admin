import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Image,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Mapview, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import NewVehicleBookingPopUp from "./NewVehicleBookingPopUp";

import { Auth, API, graphqlOperation } from "aws-amplify";
import { getVehicle, listVehicleBookings } from "../grapql/queries";
import { updateVehicle } from "../grapql/mutations";

const GOOGLE_MAPS_APIKEY = "AIzaSyAGXSUtb0RGrt4V55SXW5ZV9n5Z4xuVd7w";
const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };

const DriverHomeScreen = () => {
  const [vehicle, setVehicle] = useState(null);
  const [myPosition, setMyPosition] = useState(null);
  const [booking, setBooking] = useState(null);
  const [newBooking, setNewBooking] = useState([]);

  const fetchVehicle = async () => {
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const vehicleData = await API.graphql(
        graphqlOperation(getVehicle, { id: userData.attributes.sub })
      );
      setVehicle(vehicleData.data.getVehicle);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBookings = async () => {
    try {
      const bookingsData = await API.graphql(
        graphqlOperation(
          listVehicleBookings
          // {filter: {status:{eq:'NEW'}}}
        )
      );
      setNewBooking(bookingsData.data.listVehicleBookings.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVehicle();
    fetchBookings();
  }, []);

  {
    /*Define onDecline function*/
  }
  const onDecline = () => {
    setNewBooking(newBooking.slice(1));
  };
  {
    /*Define onAccept function*/
  }
  const onAccept = (newBooking) => {
    setBooking(newBooking);
    setNewBooking(null);
  };
  {
    /*Go button pressed */
  }
  const onGoPress = async () => {
    //update vehicle and set it to active
    try {
      const userData = await Auth.currentAuthenticatedUser();
      const input = {
        id: userData.attributes.sub,
        isActive: !vehicle.isActive,
      };
      const updatedVehicle = await API.graphql(
        graphqlOperation(updateVehicle, { input })
      );
      setVehicle(updatedVehicle.data.updateVehicle);
    } catch (error) {
      console.log(error);
    }
  };

  const onUserLocationChange = (event) => {
    console.log(event);
    setMyPosition(event.nativeEvent.coordinate);
  };

  const onDirectionFound = (event) => {
    console.log(event);
    if (booking) {
      setBooking({
        ...booking,
        distance: event.distance,
        duration: event.duration,
      });
    }
  };
  return (
    <View>
      <Mapview
        style={{
          height: Dimensions.get("window").height - 100,
          width: "100%",
          backgroundColor: "gray",
        }}
        loadingEnabled={true}
        provider={PROVIDER_GOOGLE}
        showUserLocation={true}
        onUserLocationChange={onUserLocationChange}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.2001,
          longitudeDelta: 0.2001,
        }}
      >
        {booking && (
          <MapViewDirections
            origin={myPosition}
            onReady={onDirectionFound}
            destination={{
              latitude: booking.originLatitude,
              longitude: booking.originLongitude,
            }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={5}
            strokeColor="black"
          />
        )}
      </Mapview>
      {/*Amount on Top*/}
      <Pressable
        onPress={() => console.warn("Balance")}
        style={styles.balanceButton}
      >
        <Text style={styles.balanceText}>
          <Text style={{ color: "green" }}>R</Text>
          <Text>0.00</Text>
        </Text>
      </Pressable>
      <Pressable
        onPress={() => console.warn("Pressed")}
        style={[styles.roundButton, { top: 10, left: 10 }]}
      >
        <Entypo name={"menu"} size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable
        onPress={() => console.warn("Pressed")}
        style={[styles.roundButton, { top: 10, right: 10 }]}
      >
        <Entypo name={"menu"} size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable
        onPress={() => console.warn("Pressed")}
        style={[styles.roundButton, { bottom: 100, left: 10 }]}
      >
        <Entypo name={"menu"} size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable
        onPress={() => console.warn("Pressed")}
        style={[styles.roundButton, { bottom: 100, right: 10 }]}
      >
        <Entypo name={"menu"} size={24} color="#4a4a4a" />
      </Pressable>
      {/*Go Button */}
      <Pressable onPress={onGoPress} style={styles.goButton}>
        <Text style={styles.goText}>{vehicle?.isActive ? "END" : "GO"}</Text>
      </Pressable>

      {/*Bottom container*/}
      <View style={styles.bottomContainer}>
        <Ionicons name={"options"} size={30} color="#4a4a4a" />

        {/*Check if booking is available calculate the distance to the user*/}
        {booking ? (
          <View style={{ alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <Text>
                {booking.duration ? booking.duration.toFixed(2) : "?"} min
              </Text>
              <View style={{ borderRadius: 100 }}>
                <Image
                  source={require("../../assets/Images/profile.png")}
                  resizeMode="contain"
                  style={{ width: 30, height: 30, borderRadius: 100 }}
                />
              </View>
              <Text>
                {booking.distance ? booking.distance.toFixed(2) : "?"} km
              </Text>
            </View>
            <Text style={styles.bottomText}>
              Picking up {booking.user.name}
            </Text>
          </View>
        ) : vehicle?.isActive ? (
          <Text style={styles.bottomText}>You are online</Text>
        ) : (
          <Text style={styles.bottomText}>You are offline</Text>
        )}
        <Entypo name={"menu"} size={24} color="#4a4a4a" />
      </View>

      {/* New Vehicle booking popup */}
      {newBooking.length > 0 && !booking && (
        <NewVehicleBookingPopUp
          newBooking={newBooking[0]}
          duration={2}
          distance={0.5}
          onDecline={onDecline}
          onAccept={() => onAccept(newBooking[0])}
        />
      )}
    </View>
  );
};

export default DriverHomeScreen;

const styles = StyleSheet.create({
  bottomContainer: {
    height: 100,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  bottomText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4a4a4a",
  },
  roundButton: {
    position: "absolute",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 25,
  },
  goButton: {
    position: "absolute",
    backgroundColor: "#1495ff",
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    bottom: 110,
    left: Dimensions.get("window").width / 2 - 37,
  },
  goText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  balanceButton: {
    position: "absolute",
    backgroundColor: "#c1c1c1",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    top: 10,
    left: Dimensions.get("window").width / 2 - 80,
  },
  balanceText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
});
/*  */
