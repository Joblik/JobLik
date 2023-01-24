import React, { useState,useEffect } from "react";
import client from "../../api/client";
import { Text, StyleSheet, Image, View,TouchableOpacity,Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Card } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
const PostScreen = ({route , navigation}) => {
  const post = route.params.post;
    const user = route.params.user;
  const userPost = post.userId;
  const [userposts, setUserposts] = useState(userPost);  
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await client.get(`/user/${userPost}`);
        const user = response.data;
        setUserposts(user);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser();
  }, [userPost]);
  console.log(userposts.username)
  useEffect(() => {
    async function getUserId() {
      const id = await AsyncStorage.getItem("id"); 
      setUserId(JSON.parse(id));  
    }
    getUserId();
    
  }, []);
  const handleLike = async (postId) => {
    try {
      const id = await AsyncStorage.getItem("id");
      const userId = JSON.parse(id);
      const response = await client.post('/post/addLike', 
      { 
        postId:postId,
        userId:userId,
       });
       if(response.status === 201) {
         //like added successfully
       } else {
         //handle error
       }
    } catch (error) {
       console.log(error);
    }  
  }
    
   
  return (
    <View style={styles.onePost}>
      
       <Text
        style={{
          color: "#0084ff",
          marginTop: 40,
          fontWeight: "bold",
          fontSize: 20,
          marginLeft: 20,
          marginTop:40
        }}
        onPress={()=>navigation.navigate("home") }
      >
        JobLik
      </Text>
      <TouchableOpacity 
   onPress={() => navigation.navigate('user', { userPost })}>
  <Text style={styles.username}>{userposts.username}</Text>
  </TouchableOpacity>
      <Image
    style={[styles.ellipseIcon, styles.onePostItemPosition]}
    resizeMode="cover"
    source={require("../../components/images/2.jpg")}
  />
  <View style={ { borderWidth: 1, borderColor: '#0084ff', marginTop:180,marginLeft: 35,marginRight:35,}}>
 <Text style={[styles.title]}>{post.title}</Text>
 <Card>
 <Text style={styles.oneLayout}> 
 {post.description} </Text> 
 <TouchableOpacity style={{
                // fontFamily: "ExtraBold",
                fontSize: 13,
                marginTop: -50,
                marginLeft: 250,
                color: "red",
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5, // align items center
              }}
             onPress={() => { 
        handleLike(post._id); 
      }}>
  <Image source={require("../../components/welcome/likes.png")} style={{width: 20, height: 20}} />
  <View>
            <Text>{post.likes.length} </Text>
        </View>
</TouchableOpacity>
 </Card>
 
  
<Text style={styles.dinarsTypo}>
<MaterialIcons name="language" size={24} color="#000" /> {post.adress}     
  </Text>
 </View>
</View>

  );
};

const styles = StyleSheet.create({
  titleTypo: {
    textAlign: "left",
    fontWeight: "Inter",
  },
  titleTypo1: {
    color: "#000",
    textAlign: "left",
    fontWeight: "Inter",
  },
  dinarsTypo: {
    fontSize: 28,
    color: "#000",
    marginTop:100,
    marginLeft:50,
   
  },
  iconPosition: {
    left: 37,
    position: "absolute",
  },
  oneLayout: {
    height: 62,
    width: 173,
    borderRadius: 15,
    marginTop:50,
    
  },
  likeTypo: {
    color: "#fff",
    fontSize: 25,
    top: 825,
    textAlign: "left",
    fontWeight: "Inter",
    position: "absolute",
  },
  onePostItemPosition: {
    left: 44,
    position: "absolute",
  },
  onePostInnerLayout: {
    height: 360,
    position: "absolute",
    marginRight:20
  },
  somewhereInThe: {
    top: 624,
    left: 100,
    position: "absolute",
  },
  title: {
    marginTop:50,
    fontSize: 45,
    marginLeft:100,
  },
  image17Icon: {
    top: 616,
    width: 34,
    height: 41,
  },
  image18Icon: {
    top: 679,
    width: 33,
    height: 33,
  },
  dinars: {
    top: 683,
    left: 108,
    position: "absolute",
  },
  onePostChild: {
    top: 809,
    left: 213,
    position: "absolute",
  },
  comment: {
    left: 242,
  },
  onePostItem: {
    top: 810,
  },
  like: {
    left: 107,
  },
  joblik: {
    top: 14,
    left: 13,
    fontSize: 32,
    letterSpacing: 3.2,
    color: "#1a3e4f",
    textAlign: "left",
    fontWeight: "Inter",
    position: "absolute",
  },
  onePostInner: {
    top: 241,
    left: 26,
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    width: 373,
  },
  loremIpsumDolor: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  exEaCommodo: {
    margin: 0,
  },
  loremIpsumDolorContainer: {
    top: 258,
    left: 39,
    width: 351,
  },
  ellipseIcon: {
    top: 107,
    width: 56,
    height: 63,
  },
  username: {
    top: 50,
    left: 137,
    fontSize:24,
    width: 163,
    height: 28,
    position: "absolute",
    color:"#0084ff",
  },
  onePost: {
    backgroundColor: "#fffafa",
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default PostScreen;
