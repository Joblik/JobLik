import React from "react";
import { StyleSheet } from "react-native";
import LoginScreen from "./screens/Login/LoginScreen";
import Register from "./screens/register/register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassword from "./screens/ForgotPassword/forgotPassword";
import OTP from "./screens/otpScreen/otpScreen";
import TabNav from "../Client/navigation/TabNav"
import AllChat from "../Client/screens/allChats/AllChats"
import Search from "./screens/Search";




export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="createPost"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="allChat" component={AllChat} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="forgotPassword" component={ForgotPassword} />
        <Stack.Screen name="otp" component={OTP} />
        <Stack.Screen name="home" component={TabNav} />
        <Stack.Screen name="Search" component={TabNav} />
        <Stack.Screen name="createPost" component={TabNav} />
        <Stack.Screen name="UserProfile" component={TabNav} />
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
