import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "Single Room", value: "1" },
  { label: "Double Room", value: "2" },
  { label: "Bechelor Room", value: "3" },
];

const RoomType = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={styles.Dropdown}>
      <Dropdown
        style={styles.picker}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select Room" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default RoomType;

const styles = StyleSheet.create({
  picker: {
    width: 230,
  },
  Dropdown: {
    borderWidth: 1,
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: "white",
    paddingLeft: 10,
  },
});
