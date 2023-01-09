import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LoginScreen from './screens/Login/LoginScreen'
import Footer from './screens/Footer';
import PostScreen from './screens/onePost/postScreen'
import dd from './data/dummy'
import CreatePost from './screens/createPost/CreatePost'
import Register from './screens/register/register';
 import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProfile from './screens/userProfile/UserProfile';
import Followers from './screens/followers/Followers';
import Followings from './screens/followings/Followings';
import Forgot from './screens/ForgotPassword/Forgot';
import AllChats from './screens/allChats/AllChats';
import OneChatScreen from './screens/oneChat/OneChat';



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
     
   );
    <View style={styles.container}>
      <View style={styles.view}>
      <Followers data={dd}/>
      </View>
    <Footer/> 
    </View>
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
