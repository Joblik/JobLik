import React, { useState, useEffect } from 'react';
import {  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions, } from 'react-native';
import axios from 'axios';
import Footer from '../Footer/Footer';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.104.25:8080/Posts/getAllPosts')
      .then(response => {
        setPosts(response.data);
      }) 
      .catch(error => {
        console.error(error);
      });
  }, []);
  console.log(posts);

  return (
    <View style={styles.container}>
    
    <Footer/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
    padding: 80,
    }
  })

export default Home;

