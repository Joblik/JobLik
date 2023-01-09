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
import { Card } from "react-native-elements";

const Home = ({navigation}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("http://192.168.104.22:8080/Posts/getAllPosts");
      setPosts(response.data);  // update the state variable with the posts data
      console.log(response.data);
    }
    fetchPosts();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollableContainer}>
        {posts.map((post) => (
          <Card key={post._id}
          containerStyle={{
            borderRadius: 20,
            width: "140%",
            height: "10%",
            marginBottom: 15,
            // bottom: 20
          }}>
            <Text style={styles.text}>
              {post.description}, {post.adress}, {post.userId}
            </Text>
          </Card>
        ))}
      </ScrollView>
      <Footer navigation={navigation} style={styles.footerContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // to make the container take up the whole screen
  },
  scrollableContainer: {
    flex: 1,  // to make the scrollable container take up the remaining space
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
