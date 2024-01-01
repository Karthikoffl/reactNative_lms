import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import Colors from "../../Utils/Colors";
import Coin from "../../../assets/images/coin.png";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    isLoaded && (
      <View>
        <View style={[styles.rowStyle, { justifyContent: "space-between" }]}>
          <View style={styles.rowStyle}>
            <Image
              source={{ uri: user?.imageUrl }}
              resizeMode="contain"
              style={{ width: 50, height: 50, borderRadius: 99 }}
            />
            <View>
              <Text style={{ color: Colors.WHITE, fontFamily: "outfit" }}>
                Welcome,
              </Text>
              <Text style={styles.mainText}>{user?.fullName}</Text>
            </View>
          </View>
          <View style={styles.rowStyle}>
            <Image
              source={Coin}
              resizeMode="contain"
              style={{ width: 35, height: 35 }}
            />
            <Text style={styles.mainText}>6969</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            paddingLeft: 20,
            paddingRight: 5,
            flexDirection: "row",
            justifyContent: "space-between",
            borderRadius: 99,
            marginTop: 25,
          }}
        >
          <TextInput
            placeholder="Search Courses"
            style={{ fontFamily: "outfit", fontSize: 18 }}
          />
          <Ionicons name="search-circle" size={50} color={Colors.PRIMARY} />
        </View>
      </View>
    )
  );
};

export default Header;

const styles = StyleSheet.create({
  mainText: {
    color: Colors.WHITE,
    fontSize: 20,
    fontFamily: "outfit",
  },
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
