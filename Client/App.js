import React from "react";
import { StyleSheet } from "react-native";
import LoginScreen from "./screens/Login/LoginScreen";
import Register from "./screens/register/register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPassWord from "./screens/forgotPassword/forgotPassword";
import OTP from "./screens/otpScreen/otpScreen";
import TabNav from "../Client/navigation/TabNav"
import Chat from "./screens/Chat/Chat"
import Map from "./screens/Map/Map";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Chat"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="forgotPassword" component={ForgotPassWord} />
        <Stack.Screen name="otp" component={OTP} />
        <Stack.Screen name="home" component={TabNav} />
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
