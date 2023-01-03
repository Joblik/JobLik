import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import LoginScreen from './screens/Login/LoginScreen'
import Footer from './screens/Footer';
import PostScreen from './screens/onePost/postScreen'
import dd from './data/dummy'
import CreatePost from './screens/createPost/CreatePost'
import UserProfile from './screens/userProfile/UserProfile';
import Followers from './screens/followers/Followers';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
      <Followers data={dd}/>
      </View>
    <Footer/> 
    </View>
  );
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
