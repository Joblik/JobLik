import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import axios from 'axios';
import Footer from '../Footer';

const Home = () => {
  const [posts, setPosts] = useState([]);

 
    const getMoviesFromApiAsync = async () => {
      try {
        const response = await fetch(
          'http://192.168.1.175:8080/Posts/getAllPosts',
        );
        const data = await response.json();
        setPosts(data)
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
    <Footer/>
    </View>
  );
}

export default Home;

