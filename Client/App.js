import React from "react";
import { StyleSheet } from "react-native";
import LoginScreen from "./screens/Login/LoginScreen";
import Register from "./screens/register/register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home/home";
import CreatePost from "./screens/createPost/CreatePost";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="createPost">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="createPost" component={CreatePost} />
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