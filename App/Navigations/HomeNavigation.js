import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screen/HomeScreen";
import CourseDetailScreen from "../Screen/CourseDetailScreen";

const Stack = createStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="course-detail" component={CourseDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;