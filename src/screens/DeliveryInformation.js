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
//import info from "../../assets/data/info";

// create a component
const DeliveryInformation = () => {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={require("../../assets/Images/background/background.jpeg")}
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            resizeMode: "cover",
          }}
        >
          <View>
            <View>
              <Text>BACK</Text>
              <View>
                <Image
                  source={{
                    uri: "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2f2/2c32/57ac23d415b0b7e6c9e910e117b35cc5",
                  }}
                />
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/J6NKRk4HjNFGdvZRuMHIj5-216%3A46?alt=media&token=61b5b599-0592-43a8-bddf-079f8583d843",
                  }}
                />
              </View>
            </View>
            <Image
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/J6NKRk4HjNFGdvZRuMHIj5-216%3A72?alt=media&token=04c8c2e1-3247-4a9b-a0cd-400d8fa176e8",
              }}
            />
            <View>
              <Text>Pick up Date :{info.map((info) => info.pickUpDate)} </Text>
              <Text>Amount To Pay : </Text>
              <Text>Discount : {info.map((info) => info.discount)}</Text>
              <Text>Total Price : </Text>
              <Text>Distance: 350 KM</Text>
              <Text>ETA: 4 - 5 hours</Text>
            </View>
          </View>
          <View>
            <View>
              <View>
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/J6NKRk4HjNFGdvZRuMHIj5-216%3A59?alt=media&token=e3657e7d-8ee4-485e-bc20-85a3efdf9600",
                  }}
                />
                <View>
                  <Text>Sifiso</Text>
                  <View>
                    <Text>Upcoming</Text>
                  </View>
                </View>
              </View>
              <Text>From Pretoria To Newcastle</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

//make this component available to the app
export default DeliveryInformation;
