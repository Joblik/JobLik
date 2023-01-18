import React from "react";
import { StyleSheet } from "react-native";
import LoginScreen from "./screens/Login/LoginScreen";
import Register from "./screens/register/register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OTP from "./screens/otpScreen/otpScreen";
import User from "./screens/user/user";
// import EditProfile from "./screens/userProfile/EditProfile"
// import Profile from "../Client/screens/userProfile/UserProfile"
// import TabNav from "../Client/navigation/TabNav"
import OnePost from "./screens/onePost/postScreen"

import following from "./screens/followings/Followings"
import Posts from "./screens/posts/posts";
import OneChat from "./screens/OneChat/OneChat";
import followers from "./screens/followers/Followers";
import Map from "./screens/map/Map";
import Chat from "./screens/Chat/Chat";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="chat" component={Chat} />
         <Stack.Screen name="posts" component={Posts} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="following" component={following} />
        <Stack.Screen name="followers" component={followers} />
        <Stack.Screen name="oneChat" component={OneChat} />
        <Stack.Screen name="OnePost" component={OnePost}  />
        <Stack.Screen name="Map" component={Map} /> 
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="otp" component={OTP} />
        <Stack.Screen name="user" component={User} />
        {/* <Stack.Screen name="home" component={TabNav}/>
        <Stack.Screen name="UserProfile" component={TabNav} />
        <Stack.Screen name="Search" component={TabNav} />
        <Stack.Screen name="editProfile" component={EditProfile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
