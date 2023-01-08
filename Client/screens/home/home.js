import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  } from "react-native";
import Footer from '../Footer';

const Home = ({navigation}) => {
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
    <View style={styles.container}>
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

