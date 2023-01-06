import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.104.16:8080/Posts/getAllPosts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(posts);

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <Text>{item.title}</Text>
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}

export default Home;

