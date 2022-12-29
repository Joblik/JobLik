import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/Login/LoginScreen'
import PostScreen from './screens/onePost/postScreen'
import dd from './data/dummy'

export default function App() {
  return (
    <View style={styles.container}>
     <PostScreen data={dd}/> 
      <StatusBar style="auto" />
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
});
