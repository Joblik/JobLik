import React, { useState,useEffect } from "react";
import client from "../../api/client";
import { Text, StyleSheet, Image, View,TouchableOpacity,Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const PostScreen = ({route , navigation}) => {
  const [userId, setUserId] = useState(null);  
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
    const post = route.params.post;
    const user = route.params.user;
    const userPost = post.userId;
 
  return (
    <View style={styles.onePost}>
  <Text style={[styles.somewhereInThe, styles.titleTypo, styles.titleTypo1, styles.dinarsTypo]}>
  {post.adress}
  </Text>
  <Text style={[styles.title, styles.iconPosition, styles.titleTypo, styles.titleTypo1]}>{post.title}</Text>
  <Image
    style={[styles.image17Icon, styles.iconPosition]}
    resizeMode="cover"
  />
  <Image
    style={[styles.onePostChild, styles.oneLayout]}
    resizeMode="cover"
  />
  <Text style={[styles.comment, styles.likeTypo]}>Comment</Text>
  <Image
    style={[styles.onePostItem, styles.onePostItemPosition, styles.oneLayout]}
    resizeMode="cover"
  />
  

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
  <View style={[styles.onePostInner, styles.onePostInnerLayout]} />
  <Text style={[styles.loremIpsumDolorContainer, styles.onePostInnerLayout, styles.titleTypo, styles.titleTypo1, styles.dinarsTypo]}>
    <Text style={styles.loremIpsumDolor}>{post.description}</Text>
  </Text>
  <Image
    style={[styles.ellipseIcon, styles.onePostItemPosition]}
    resizeMode="cover"
    source={require("../../components/images/2.jpg")}
  />
  <TouchableOpacity 
   onPress={() => navigation.navigate('user', { userPost })}>
  <Text style={[styles.username, styles.titleTypo, styles.titleTypo1]}>{post.username}</Text>
  </TouchableOpacity>
  <TouchableOpacity style={{
                // fontFamily: "ExtraBold",
                fontSize: 13,
                marginTop: 500,
                marginLeft: 50,
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
    fontSize: 20,
    color: "#000",
  },
  iconPosition: {
    left: 37,
    position: "absolute",
  },
  oneLayout: {
    height: 62,
    width: 173,
    borderRadius: 15,
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
    top: 187,
    fontSize: 45,
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
    top: 130,
    left: 137,
    fontSize: 24,
    width: 163,
    height: 28,
    position: "absolute",
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
