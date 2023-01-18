import React, { Profiler } from "react";
import { StyleSheet } from "react-native";
import LoginScreen from "./screens/Login/LoginScreen";
import Register from "./screens/register/register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OTP from "./screens/otpScreen/otpScreen";
import User from "./screens/user/user";
// import EditProfile from "./screens/userProfile/EditProfile"
// import TabNav from "../Client/navigation/TabNav"
import OnePost from "./screens/onePost/postScreen"
import Welcome from "./screens/welcome/welcome"
// import EditProfile from "./screens/userProfile/EditProfile";
import Map from "./screens/map/Map";
import Posts from "./screens/posts/posts"
import Home from "./screens/home/home"
import Profile from "./screens/userProfile/UserProfile"
import AddReclamation from "./screens/reclamation/reclamation";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
         <Stack.Screen name="posts" component={Posts} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="OnePost" component={OnePost}  />
        <Stack.Screen name="Map" component={Map} /> 
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="otp" component={OTP} />
        <Stack.Screen name="user" component={User} />
        <Stack.Screen name="home" component={Home}/>
        <Stack.Screen name="reclamation" component={AddReclamation}/>
        <Stack.Screen name="UserProfile" component={Profile} />
        {/* 
        <Stack.Screen name="UserProfile" component={TabNav} />
        <Stack.Screen name="Search" component={TabNav} /> */}
        {/* <Stack.Screen name="editProfile" component={EditProfile} />  */}
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
