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
import EditProfile from "./screens/userProfile/EditProfile";
import Footer from "./screens/Footer/Footer";
import TabNav from "./navigation/TabNav";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Screen name="register" component={Register} />

      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="forgotPassword" component={ForgotPassWord} />
      <Stack.Screen name="otp" component={OTP} />
      <TabNav>
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="createPost" component={CreatePost} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
        </Stack.Navigator>
      </TabNav>
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
