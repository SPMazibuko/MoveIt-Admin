//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import info from "../../assets/data/info";
import styles from "../styles";

// create a component
const DeliveryInformation = () => {
  return (
    <View style={{ height: "100%" }}>
      <ImageBackground
        source={require("../../assets/Images/background/background.jpeg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        {/* Menu Icons */}
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          {/* Back Icon */}
          <Image
            source={require("../../assets/Images/icons/Back.png")}
            resizeMode="cover"
            style={{
              width: 34.53,
              height: 40,
            }}
          />
          {/* Back Text */}
          <Text
            style={{
              fontSize: 14,
              fontWeight: "700",
              color: "rgba(0,0,0,1)",
              width: 37,
              height: 18,
              marginTop: 10,
            }}
          >
            BACK
          </Text>
          {/*Menu Icon */}
          <Image
            source={require("../../assets/Images/icons/Back.png")}
            resizeMode="cover"
            style={{ width: 46.04, height: 46, marginStart: "60%" }}
          />
        </View>
        {/*Map View*/}
        <View>
          <Image
            source={require("../../assets/Images/map.png")}
            resizeMode="cover"
            style={{
              width: "100%",
              maxHeight: 400,
            }}
          />
          {/* Delivery information from the database*/}
          <View
            style={{
              backgroundColor: "rgba(151,151,151,0.8)",
              height: "20%",
              paddingLeft: 10,
            }}
          >
            <View style={{ paddingTop: 70 }}>
              <Text style={styles.deliveryText}>
                Pick up Date :{info.map((info) => info.pickUpDate)}{" "}
              </Text>
              <Text style={styles.deliveryText}>Amount To Pay : </Text>
              <Text style={styles.deliveryText}>
                Discount : {info.map((info) => info.discount)}
              </Text>
              <Text style={styles.deliveryText}>Total Price : </Text>
              <Text style={styles.deliveryText}>Distance: 350 KM</Text>
              <Text style={styles.deliveryText}>ETA: 4 - 5 hours</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "rgba(187,217,88,1)",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "rgba(0,0,0,1)",
            width: 330,
            height: 100,
            paddingTop: 4,
            paddingBottom: 9,
            paddingLeft: 7,
            paddingRight: 3,
            borderRadius: 10,
            alignItems: "center",
            position: "absolute",
            top: "64%",
            left: 15,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                marginRight: 8,
              }}
            >
              <Image
                source={require("../../assets/Images/icons/J6NKRk4HjNFGdvZRuMHIj5-216-59.png")}
                resizeMode="cover"
                style={{ width: 78.34, height: 80, marginRight: 9 }}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    color: "rgba(0,0,0,1)",
                    width: 69,
                    height: 33,
                    marginBottom: 7,
                  }}
                >
                  Sifiso
                </Text>
                <View
                  style={{
                    paddingTop: 2,
                    paddingBottom: 6,
                    paddingLeft: 8,
                    paddingRight: 3.72,
                    borderRadius: 20,
                    backgroundColor: "rgba(98,157,217,1)",
                    width: 107.72,
                    height: 32,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "normal",
                      fontWeight: "400",
                      color: "rgba(255, 255, 255, 1)",
                      width: 94,
                      height: 22,
                    }}
                  >
                    Upcoming
                  </Text>
                </View>
              </View>
            </View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "rgba(0,0,0,1)",
                width: 115,
              }}
            >
              From Pretoria To Newcastle
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

//make this component available to the app
export default DeliveryInformation;
