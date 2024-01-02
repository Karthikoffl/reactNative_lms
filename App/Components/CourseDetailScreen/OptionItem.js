import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const OptionItem = ({ icon, value }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginTop: 5,
      }}
    >
      <Ionicons name={icon} size={18} color="black" />
      <Text style={{ fontFamly: "outfit" }}>{value}</Text>
    </View>
  );
};

export default OptionItem;
