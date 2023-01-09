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
      const response = await axios.get("http://192.168.104.14:8080/Posts/getAllPosts");
      setPosts(response.data);  // update the state variable with the posts data
    }
    fetchPosts();
  }, []);
  console.log(posts);
  const screenHeight = Dimensions.get('window').height;

  // Calculate the height of the Card based on its content
  const cardHeight = screenHeight * 0.15;
  
  return (
    
    <View style={styles.container}>
       <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="search..."
            placeholderTextColor="#003f5c"
            onChangeText={(e) => {
              setEmail(e);
            }}
          />
        </View>
      <View style={styles.scrollableContainer}>
        <ScrollView>
          {posts.map((post) => (
           <Card key={post._id}
           containerStyle={{
             borderRadius: 20,
             width: "90%",
             height: cardHeight,
             marginBottom: 15,
           }}>
       <Text style={styles.text}>{post.description}</Text>
       <Text style={styles.text}>{post.adress}</Text>
       <Text style={styles.text}>{post.userId}</Text>
     </Card>
          ))}
        </ScrollView>
      </View>
      <Footer navigation={navigation} style={styles.footerContainer} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
    padding: 80,
  },
  scrollableContainer: {
    flexGrow: 1,
    width:"160%"
  },
  text: {
    fontSize: 16,
    color: "#003f5c",
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width:"100%",
    marginBottom:"7%",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  inputView: {
    width: "130%",
    backgroundColor: "#FFFF",
    borderRadius: 25,
    height: 55,
    marginBottom: 25,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  
  })

export default Home;

