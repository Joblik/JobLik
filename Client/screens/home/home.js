import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import axios from "axios";
import Footer from "../Footer/Footer";

const Home = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get(
        "http://192.168.1.179/Posts/getAllPosts"
      );
      setPosts(response.data); // update the state variable with the posts data
    }
    fetchPosts();
  }, []);
  // console.log(posts);

  return <View style={styles.container}></View>;
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
