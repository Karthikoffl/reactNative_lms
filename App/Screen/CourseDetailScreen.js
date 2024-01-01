import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const CourseDetailScreen = () => {
  const navigation = useNavigation();
  const params = useRoute().params;

  useEffect(() => {
    console.log(params.course);
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-back-circle" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CourseDetailScreen;
