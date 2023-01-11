import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colorss from "../components/Colorss";
import Home from "../screens/home/home";
import UserProfile from "../screens/userProfile/UserProfile";
import New from "../screens/createPost/New"
import Search from "../screens/Search/Search"


const Tab = createBottomTabNavigator();
export default function TabNavigation() {
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
        component={Home}
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

  

        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MaterialCommunityIcons
              name="card-search"
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
      
    </Tab.Navigator>
    
  );
}
