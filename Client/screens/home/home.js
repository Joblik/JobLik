import React, { useState, useEffect } from 'react';
import {
  View, Text, Image, FlatList
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
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <Image
                source={{ uri: item.user.profileImageUrl }}
                style={styles.profileImage}
              />
              <Text style={styles.username}>{item.user.username}</Text>
            </View>
            <Text style={styles.postContent}>{item.content}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    );
  };
  
  const styles = {
    cardContainer: {
      padding: 20,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    username: {
      fontWeight: 'bold',
    },
    postContent: {
      marginTop: 10,
    },
  };
  
export default Home;

