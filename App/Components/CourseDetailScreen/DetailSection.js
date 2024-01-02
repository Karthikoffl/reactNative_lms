import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import OptionItem from "./OptionItem";

const DetailSection = ({ course, enrollCourse, userEnrolledCourse }) => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: course?.banner?.url }}
        style={{
          width: Dimensions.get("screen").width * 0.848,
          height: 190,
          borderRadius: 15,
        }}
      />
      <View style={{ padding: 10 }}>
        <Text
          style={{ fontSize: 22, fontFamily: "outfit-medium", marginTop: 10 }}
        >
          {course?.name}
        </Text>
        <View>
          <View style={styles.rowStyle}>
            <OptionItem
              icon={"book-outline"}
              value={course?.chapters?.length + " Chapters"}
            />
            <OptionItem icon={"md-time-outline"} value={course?.time + " Hr"} />
          </View>
          <View style={styles.rowStyle}>
            <OptionItem icon={"person-circle-outline"} value={course?.author} />
            <OptionItem icon={"cellular-outline"} value={course?.level} />
          </View>
        </View>
        <View>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            Description
          </Text>
          <Text
            style={{ fontFamily: "outfit", color: Colors.GRAY, lineHeight: 23 }}
          >
            {course?.description?.markdown}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 20,
            justifyContent: "space-evenly",
          }}
        >
          {userEnrolledCourse?.length == 0 ? (
            <TouchableOpacity
              onPress={() => enrollCourse()}
              style={{
                padding: 10,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: "outfit",
                  color: Colors.WHITE,
                  textAlign: "center",
                  fontSize: 17,
                }}
              >
                Enroll For Free
              </Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: Colors.SECONDARY,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit",
                color: Colors.WHITE,
                textAlign: "center",
                fontSize: 17,
              }}
            >
              Membership $2.99/Month
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailSection;

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
