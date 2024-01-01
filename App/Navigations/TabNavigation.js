import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screen/HomeScreen";
import LeaderBoard from "../Screen/LeaderBoard";
import MyCourse from "../Screen/MyCourse";
import Profile from "../Screen/Profile";
import {
  Entypo,
  MaterialIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import Colors from "../Utils/Colors";
import HomeNavigation from "./HomeNavigation";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="My Course"
        component={MyCourse}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderBoard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="leaderboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
