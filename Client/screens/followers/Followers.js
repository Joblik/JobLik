import React from 'react';
import { TouchableOpacity,View, Text, FlatList, StyleSheet, Image} from 'react-native';
import { Card } from "react-native-elements";
const users = ["user1","user2","user646","user4551","user36232","user6411","user6161","user494841","user656213","user9562","user65659","user652626","user956526","user595962","user965652","user595236"];

const Followers = ({navigation}) => {
  return (
    <View>
      <View style={styles.root}>
      <TouchableOpacity onPress={() =>  navigation.navigate("posts")}>
  <Text style={{fontSize:20, color:'black'}}>posts</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate("following")}>
  <Text style={{fontSize:20, color:'black'}}>Following</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate("followers")}>
  <Text style={{fontSize:20, color:'black'}}>Followers</Text>
</TouchableOpacity>
      </View>
      <FlatList
    style={styles.listContainer}
    data={users}
    renderItem={({ item }) => (
        <Card containerStyle={styles.listItem}>
            <View style={styles.cardContent}>
                <Image
                    source={{ uri: 'https://res.cloudinary.com/dqmhtibfm/image/upload/v1670924296/samples/people/smiling-man.jpg' }}
                    style={{ width: 50, height: 50, borderRadius: 25 }} 
                />
                <Text>{item}</Text>
                <TouchableOpacity onPress={() => alert('your follow add !')}>
  <Text style={{fontSize:20, color:'blue'}}>Delete</Text>
</TouchableOpacity>
            </View>
        </Card>
    )}
    keyExtractor={item => item}
/>
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

export default Followers;
