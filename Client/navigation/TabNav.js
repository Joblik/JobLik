import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colorss from "../components/Colorss";
import Home from "../screens/home/home";
import UserProfile from "../screens/userProfile/UserProfile";
import New from "../screens/createPost/New";
import AllChat from "../screens/Chat/AllChat";

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colorss.rakia,
        tabBarInactiveBackgroundColor: "white",
        tabBarInactiveTintColor: "black",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        children={() => <Home isSearchVisible={isSearchVisible} />}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="home"
              size={size}
              color={focused ? "#0274b3" : "gray"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Post"
        component={New}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="post"
              size={size}
              color={focused ? "#0274b3" : "gray"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={size}
              color={focused ? "#0274b3" : "gray"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={AllChat}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="chat"
              size={size}
              color={focused ? "#0274b3" : "gray"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
