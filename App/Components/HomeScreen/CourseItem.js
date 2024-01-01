import { View, Text, Image } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";

const CourseItem = ({ item }) => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: Colors.WHITE,
        marginRight: 15,
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: item?.banner?.url }}
        style={{ width: 210, height: 120, borderRadius: 15 }}
      />
      <View style={{ padding: 7 }}>
        <Text style={{ fontFamily: "outfit-medium", fontSize: 17 }}>
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginTop: 5,
            }}
          >
            <Ionicons name="book-outline" size={18} color="black" />
            <Text style={{ fontFamly: "outfit" }}>
              {item?.chapters?.length} Chapters
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginTop: 5,
            }}
          >
            <Ionicons name="md-time-outline" size={18} color="black" />
            <Text style={{ fontFamly: "outfit" }}>{item?.time} Hr</Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontFamily: "outfit-medium",
              marginTop: 5,
              color: Colors.PRIMARY,
            }}
          >
            {item.price == 0 ? "Free" : item.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CourseItem;
