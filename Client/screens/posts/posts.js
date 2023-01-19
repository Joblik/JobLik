import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet ,TouchableOpacity,Image} from 'react-native';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
const Posts = ({navigation}) => {
  const [userId, setUserId] = useState(null);
    const [posts, setPosts] = useState([]);
    const [UserPosts, setUserPosts] = useState([]);
    const [PostList, setPostList] = useState([]);
    useEffect(() => {
      async function getUserId() {
        const id = await AsyncStorage.getItem("id");
        setUserId(JSON.parse(id));  
      }
      getUserId();
      
      const fetchUser = async () => {
        try {
          const response = await axios.get("http:/192.168.104.6:5000/post/getAllPosts");
          const posts = response.data;
          setPosts(posts);
          const postList = posts.map(post => post);
          setPostList(postList);
        } catch (error) {
          console.error(error);
        }
      }
      fetchUser();
      
    },[]);
    
    useEffect(() => {
      if(userId){
        const filteredPosts = PostList.filter(post => post.userId.includes(userId));
        setUserPosts(filteredPosts);
        console.log(UserPosts,"ggggggggg")
      }
    },[userId,PostList]);
    
        
  
        

  return (
    <View style={styles.container}>
       <View style={styles.root}>
      <TouchableOpacity onPress={() =>  navigation.navigate("posts")}>
  <Text style={{fontSize:20, color:'black'}}>posts</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate("followings")}>
  <Text style={{fontSize:20, color:'black'}}>Following</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate("followers")}>
  <Text style={{fontSize:20, color:'black'}}>Followers</Text>
</TouchableOpacity>
      </View>
    <View >
     
                  
{UserPosts.map((UserPosts) => (
        <TouchableOpacity onPress={() => navigation.navigate("OnePost",{UserPosts:UserPosts })}>
          <View
          key={UserPosts.userId}
            style={{
              backgroundColor:UserPosts.status === "active" ? "#FFF" : "#DFDFDF",
              marginTop: 10,
              flexDirection: "row",
              borderRadius: 10,
              height: 130,
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "#DFDFDF",
                borderRadius: 5,
                height: 40,
                width: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../components/img/logo.png")}
                style={{ width: 100, height: 100 }}
              />
            </View>

            <View
              style={{
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  // fontFamily: "ExtraBold",
                  fontSize: 13,
                  marginTop: 20,
                }}
              >
                {UserPosts.title}
              </Text>

              <View
                style={{
                  backgroundColor:
                  UserPosts.status === "active" ? "#DFDFDF" : "#FFF",
                  borderRadius: 5,
                  width: 250,
                  alignItems: "center",
                  marginVertical: 5,
                }}
              >
                <Text
                  style={{
                    // fontFamily: "Medium"
                    fontSize: 15,
                  }}
                >
                  {UserPosts.description.length > 60
                    ? `${UserPosts.description.substring(0, 60)}...`
                    : UserPosts.description}
                </Text>
              </View>
            </View>
            <Text
              style={{
                // fontFamily: "ExtraBold",
                fontSize: 10,
                marginLeft: 90,
                marginBottom: 100,
              }}
            >
              {posts.adress}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    margin: 10,
    width: '90%',
    textAlign: 'center',
    fontWeight: 'bold',
  }, 
  statsButtonText:{
    color : "blue"
},
root: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: 400,
  height: 80,
  marginLeft:20,
  marginTop:-550,
},
});
export default Posts;
