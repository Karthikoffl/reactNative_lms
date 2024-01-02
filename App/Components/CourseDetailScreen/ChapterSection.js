import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

const ChapterSection = ({ chapterList, userEnrolledCourse }) => {
  const navigation = useNavigation();

  const OnChapterPress = (chapter) => {
    if (userEnrolledCourse.length == 0) {
      ToastAndroid.show("Please Enroll Course!", ToastAndroid.LONG);
      return;
    } else {
      navigation.navigate("chapter-content", {
        content: chapter.content,
        chapterId: chapter.id,
        userCourseRecordId: userEnrolledCourse[0]?.id,
      });
    }
  };

  return (
    <View
      style={{
        padding: 10,
        backgroundColor: Colors.WHITE,
        marginTop: 20,
        borderRadius: 15,
      }}
    >
      <Text style={{ fontFamily: "outfit-medium", fontSize: 22 }}>
        Chapters
      </Text>
      {chapterList.map((item, index) => (
        <TouchableOpacity
          onPress={() => OnChapterPress(item.content)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 15,
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 10,
            borderColor: `${userEnrolledCourse ? Colors.GREEN : Colors.GRAY}`,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 27,
                color: `${userEnrolledCourse ? Colors.GREEN : Colors.GRAY}`,
              }}
            >
              {index + 1}
            </Text>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 21,
                color: `${userEnrolledCourse ? Colors.GREEN : Colors.GRAY}`,
              }}
            >
              {item?.title}
            </Text>
          </View>
          {userEnrolledCourse.length == 0 ? (
            <Ionicons name="md-lock-closed" size={25} color={Colors.GRAY} />
          ) : (
            <Ionicons name="play" size={25} color={Colors.GREEN} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ChapterSection;
