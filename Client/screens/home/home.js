import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import axios from "axios";


const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get(
        "http://192.168.104.21/Posts/getAllPosts"
      );
      setPosts(response.data); 
    }
    fetchPosts();
  }, []);


  return <View style={styles.container}>
   
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // to make the container take up the whole screen
  },
  scrollableContainer: {
    flex: 1, // to make the scrollable container take up the remaining space
  },
  text: {
    fontSize: 16,
    color: "#003f5c",
  },
  footerContainer: {
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
});

export default Home;
