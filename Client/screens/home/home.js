import React, { useState, useEffect } from "react";
import { StyleSheet, View,Dimensions,Text,TextInput,ScrollView } from "react-native";
import {Card} from "react-native-elements"
import axios from "axios";
// import { useRefresh } from 'react-native-refresh-control';


const Home = ({navigation}) => {
  // const { refresh } = useRefresh();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([])


  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("http://192.168.103.18:8080/Posts/getAllPosts");
      setPosts(response.data);  
      setFilteredPosts(response.data)
    }
    fetchPosts(); 
  }, []);
  console.log('posts:'+posts);
  const screenHeight = Dimensions.get('window').height;

  
  const cardHeight = screenHeight * 0.15;
  
  return (
    
    <View style={styles.container}>
      <View style={styles.scrollableContainer}>

        <Text style={{fontSize: 28}}>Welcome !</Text>

        <ScrollView 
        //  refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //     onRefresh={refresh}
        //   />
        // }
        >
          {
          filteredPosts.map((post) => (
           <Card key={post._id}
           containerStyle={{
             borderRadius: 20,
             width: "90%",
             height: cardHeight,
             marginBottom: 15,
           }}>
        
      <Text style={styles.text}>{post.title?post.title:'No title'}</Text>
       <Text style={styles.text}>{post.description?post.description.slice(0,30)+'...':'No description'}</Text>
       <Text style={styles.text}>{post.adress?post.adress:'No Address'}</Text>
       <Text style={styles.text}>{post.userId}</Text>
     </Card>
          ))}
        </ScrollView>
      </View>
      <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Search.."
            placeholderTextColor="#003f5c"
            onChangeText={(e) => {
              setFilteredPosts(posts.filter(p => p.description && p.description.toLowerCase().includes(e.toLowerCase()) || p.title && p.title.toLowerCase().includes(e.toLowerCase()) || p.adress && p.adress.toLowerCase().includes(e.toLowerCase())))
              console.log('filtered:'+filteredPosts +'/'+posts)
            }}
            
          />
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
    padding: 85,
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
    backgroundColor: "#FFFFF0",
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    padding: 10
  },
  inputText: {
    height: 20,
    textAlign: 'center',
    color: "black",
    marginBottom: 5,
  },
  
  })

export default Home;

