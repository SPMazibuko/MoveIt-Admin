import React, { useState } from "react";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles";

import Phone from "react-native-vector-icons/AntDesign";
import Chat from "react-native-vector-icons/AntDesign";
import AntDesi from "react-native-vector-icons/AntDesign";

export default function Delivery() {
  const [openMonth, setOpenMonth] = useState(false);
  const [monthValue, setMonthValue] = useState(null);
  const [months, setMonths] = useState([
    { label: "January", value: "january" },
    { label: "February", value: "february" },
    { label: "March", value: "march" },
    { label: "April", value: "april" },
    { label: "May", value: "may" },
    { label: "June", value: "june" },
    { label: "July", value: "july" },
    { label: "August", value: "august" },
    { label: "September", value: "september" },
    { label: "October", value: "october" },
    { label: "November", value: "november" },
    { label: "December", value: "december" },
  ]);
  const [openYear, setOpenYear] = useState(false);
  const [yearValue, setYearValue] = useState(null);
  const [years, setYears] = useState([{ label: "2022", value: "2022" }]);
  return (
    <View style={{ height: "100%" }}>
      <ImageBackground
        source={require("../../assets/Images/background/background.jpeg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        {/* Header */}
        <View style={{ marginTop: 70, alignItems: "center" }}>
          <Text style={{ fontSize: 35, fontWeight: "800" }}>My Deliveries</Text>
        </View>

        {/*Footer */}
        <View
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backfaceVisibility: "visible",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            height: "100%",
            marginTop: 50,
            padding: 22,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={{ paddingLeft: 45, fontSize: 18 }}>Month</Text>
              <DropDownPicker
                open={openMonth}
                value={monthValue}
                items={months}
                setOpen={setOpenMonth}
                setValue={setMonthValue}
                setItems={setMonths}
                placeholder="Select month"
                containerProps={{
                  width: "50%",
                }}
              />
            </View>
            <View>
              <Text style={{ paddingLeft: -55, fontSize: 18 }}>Year</Text>
              <DropDownPicker
                open={openYear}
                value={yearValue}
                items={years}
                setOpen={setOpenYear}
                setValue={setYearValue}
                setItems={setYears}
                placeholder="Select year"
                containerProps={{
                  width: "53%",
                  marginLeft: -60,
                }}
              />
            </View>
          </View>
          {/*Upcoming deliveries*/}
          <View style={{ paddingTop: 15 }}>
            <Text style={{ fontSize: 24 }}>Upcoming Deliveries</Text>
            <View>
              <View
                style={{
                  backgroundColor: "#fff",
                  width: 300,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  height: 70,
                  padding: 7,
                }}
              >
                <Text>14/02/2022</Text>
                <Text>From Pretoria To Newcastle</Text>
                <Text>Booked By Sifiso</Text>
              </View>
              <View style={{ flexDirection: "row", paddingTop: 5 }}>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 50,
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Phone name="phone" size={30} color="black" />
                </View>

                <TouchableOpacity
                  style={{
                    backgroundColor: "white",
                    borderRadius: 50,
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 190,
                  }}
                >
                  <Chat name="message1" size={30} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            {/*Deliveries Due*/}
            <View style={{ paddingTop: 15 }}>
              <Text style={{ fontSize: 24 }}>Deliveries Due</Text>
              <View
                style={{
                  backgroundColor: "#fff",
                  width: 300,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  height: 150,
                  padding: 7,
                }}
              >
                <Text style={{ fontWeight: "400", fontSize: 18, padding: 15 }}>
                  No Deliveries Due
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
