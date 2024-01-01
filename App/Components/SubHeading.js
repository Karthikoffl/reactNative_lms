import { View, Text } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";

const SubHeading = ({ text, color = Colors.BLACK }) => {
  return (
    <View>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 24, color: color }}>
        {text}
      </Text>
    </View>
  );
};

export default SubHeading;
