import React, { useState, useEffect } from "react";
import { StyleSheet, View,Dimensions,Text,TextInput,ScrollView } from "react-native";
import {Card} from "react-native-elements"
import axios from "axios";
// import { useRefresh } from 'react-native-refresh-control';


const Home = ({navigation}) => {
  // const { refresh } = useRefresh();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("http://192.168.104.14:8080/Posts/getAllPosts");
      setPosts(response.data);  
    }
    fetchPosts();
  }, []);
  console.log(posts);
  const screenHeight = Dimensions.get('window').height;

  
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
        <ScrollView 
        //  refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //     onRefresh={refresh}
        //   />
        // }
        >
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

