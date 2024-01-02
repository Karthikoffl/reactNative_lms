import { TouchableOpacity, ScrollView, ToastAndroid } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import DetailSection from "../Components/CourseDetailScreen/DetailSection";
import ChapterSection from "../Components/CourseDetailScreen/ChapterSection";
import { enrollCourse, getEnrolledCourse } from "../Services";
import { useUser } from "@clerk/clerk-expo";

const CourseDetailScreen = () => {
  const navigation = useNavigation();
  const params = useRoute().params;
  const { user } = useUser();
  const [userEnrolledCourse, setUserEnrolledCourse] = useState([]);

  useEffect(() => {
    // console.log(params.course);
    if (user && params.course) {
      GetUserEnrolledCourse();
    }
  }, [params.course, user]);

  const UserEnrollCourse = () => {
    enrollCourse(params.course.id, user.primaryEmailAddress.emailAddress).then(
      (resp) => {
        // console.log(resp);
        if (resp) {
          ToastAndroid.show("Course enrolled successfully!", ToastAndroid.LONG);
          GetUserEnrolledCourse();
        }
      }
    );
  };

  const GetUserEnrolledCourse = () => {
    getEnrolledCourse(
      params.course.id,
      user.primaryEmailAddress.emailAddress
    ).then((resp) => {
      // console.log(resp.userEnrolledCourses);
      setUserEnrolledCourse(resp.userEnrolledCourses);
    });
  };

  return (
    params.course && (
      <ScrollView style={{ padding: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back-circle" size={40} color="black" />
        </TouchableOpacity>
        <DetailSection
          course={params?.course}
          enrollCourse={() => UserEnrollCourse()}
          userEnrolledCourse={userEnrolledCourse}
        />
        <ChapterSection
          chapterList={params?.course?.chapters}
          userEnrolledCourse={userEnrolledCourse}
        />
      </ScrollView>
    )
  );
};

export default CourseDetailScreen;
