import React , {useEffect,useState} from 'react';
import { TouchableOpacity,View, Text, FlatList, StyleSheet, Image} from 'react-native';
import { Card } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import client from '../../api/client';

const Followers = ({navigation}) => {
  const [userId, setUserId] = useState(null);
  const [Followers, setFollowers] = useState([]);
  const [UserFollowers, setUserFollowers] = useState([]);
  const [FollowersList, setFollowersList] = useState([]);
  const [followName,setFollowName] = useState([])

  useEffect(() => {
    async function getUserId() {
      const id = await AsyncStorage.getItem("id");
      setUserId(JSON.parse(id));  
    }
    getUserId();

    const fetchFollowers = async () => {
      try {
        const response = await client.get("/followers/getAllFollowers");
        const Followers = response.data;
        setFollowers(Followers);
        const FollowersList = Followers.map(follower => follower);
        setFollowersList(FollowersList);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFollowers();
  },[]);

  useEffect(() => {
    if(userId){
      const filteredPosts = FollowersList.filter(follower =>follower.userId===userId);
      setUserFollowers(filteredPosts);
    }
  },[userId,FollowersList]);
  return (
    <View>
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
      {UserFollowers.map((follower, index) => (
  <View key={index} style={styles.cardContainer}>
    <Card containerStyle={styles.cardContent}>
      <Image
        source={{ uri: 'https://res.cloudinary.com/dqmhtibfm/image/upload/v1670924296/samples/people/smiling-man.jpg' }}
        style={{ width: 50, height: 50, borderRadius: 25 }} 
      />
      <Text>{follower.userId?.username}</Text>
      <TouchableOpacity onPress={() => alert('your follow add !')}>
        <Text style={{fontSize:20, color:'blue'}}>follow</Text>
      </TouchableOpacity>
    </Card>
  </View>
))}

    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
      marginBottom: 230,
      marginTop: 30
  },
  listItem: {
      borderRadius: 10,
      padding: 30,
      margin:10,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
  },
  cardContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  root: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: 380,
      height: 80,
      marginLeft:20,
      marginTop:20
  },
});

export default Followers;
