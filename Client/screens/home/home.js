import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  } from "react-native";
import Footer from '../Footer';

const Home = ({navigation}) => {
  const [posts, setPosts] = useState([]);

 
    const getMoviesFromApiAsync = async () => {
      try {
        const response = await fetch(
          'http://192.168.104.19:8080/Posts/getAllPosts',
        );
        const data = await response.JSON();
        setPosts(data)
        console.log('hello',data)
        return data;
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <View>
      
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <Text>{item.title}</Text>
      )}
      keyExtractor={item => item.id.toString()}
    /> 
      <Footer navigation={navigation} />
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

