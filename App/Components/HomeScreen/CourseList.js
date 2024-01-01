import { View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { getCourseList } from "../../Services";
import SubHeading from "../SubHeading";
import Colors from "../../Utils/Colors";
import CourseItem from "./CourseItem";
import { useNavigation } from "@react-navigation/native";

const CourseList = ({ level }) => {
  const [courseList, setCourseList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList(level).then((resp) => {
      //   console.log("Response :", resp);
      setCourseList(resp?.courses);
    });
  };

  return (
    <View style={{}}>
      <SubHeading
        text={level + " Courses"}
        color={level === "Basic" && Colors.WHITE}
      />
      <FlatList
        data={courseList}
        key={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("course-detail", { course: item })
            }
          >
            <CourseItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CourseList;
