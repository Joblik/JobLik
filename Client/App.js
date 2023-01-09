import React from "react";
import { StyleSheet } from "react-native";
import LoginScreen from "./screens/Login/LoginScreen";
import Register from "./screens/register/register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProfile from "./screens/userProfile/UserProfile";
import ForgotPassWord from "./screens/forgotPassword/forgotPassword";
import Home from "./screens/home/home";
import CreatePost from "./screens/createPost/CreatePost";
import OTP from "./screens/otpScreen/otpScreen";
import Footer from "./screens/Footer/Footer";




export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="register" component={Register} />
         <Stack.Screen name="login" component={LoginScreen} />
         <Stack.Screen name="otp" component={OTP} />
        <Stack.Screen name="forgotPassword" component={ForgotPassWord} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="createPost" component={CreatePost} />
        <Stack.Screen name="userProfile" component={UserProfile} />    
        <Stack.Screen name="footer" component={Footer} />    
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