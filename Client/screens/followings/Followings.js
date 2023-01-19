import React , {useEffect,useState} from 'react';
import { TouchableOpacity,View, Text, FlatList, StyleSheet, Image} from 'react-native';
import { Card } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';


const Followings = ({navigation}) => {
  const [userId, setUserId] = useState(null);
    const [Followings, setFollowings] = useState([]);
    const [UserFollowings, setUserFollowings] = useState([]);
    const [FollowingsList, setFollowingsList] = useState([]);
    const [followName,setFollowName] = useState([])
    useEffect(() => {
      async function getUserId() {
        const id = await AsyncStorage.getItem("id");
        setUserId(JSON.parse(id));  
      }
      getUserId();
      
      const fetchUser = async () => {
        try {
          const response = await axios.get("http://192.168.104.6:5000/followings/getAllFoloowing");
          const Followings = response.data;
          setFollowings(Followings);
          const FollowingsList = Followings.map(followings => followings);
          setFollowingsList(FollowingsList);
        } catch (error) {
          console.error(error);
        }
      }
      fetchUser();
      
    },[]);
    
    useEffect(() => {
      if(userId){
        const filteredPosts = FollowingsList.filter(followings =>followings.userId.includes(userId));
        setUserFollowings(filteredPosts);
        console.log(setUserFollowings.followingId,"ggggggggg")
      }

      
    },[userId,FollowingsList]);
    // 
    
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
      {UserFollowings.map((following, index) => (
  <View key={index} style={styles.cardContainer}>
    <Card containerStyle={styles.cardContent}>
      <Image
        source={{ uri: 'https://res.cloudinary.com/dqmhtibfm/image/upload/v1670924296/samples/people/smiling-man.jpg' }}
        style={{ width: 50, height: 50, borderRadius: 25 }} 
      />
      <Text>{following.followingId}</Text>
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
      width: 400,
      height: 80,
      marginLeft:20,
  },
});

export default Followings;
