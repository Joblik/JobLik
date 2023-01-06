import React from 'react'
import { View , Text , Image , StyleSheet , ImageBackground, Button, TextInput, TouchableOpacity} from 'react-native'

const UserProfile = () =>{
    return (
      <View style={styles.container}>
          <Image
            source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Free-Download.png' }}
            style={styles.profileImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>John Doe</Text>
            <View style={styles.listContainer}>
              <Text style={styles.listItem}>Located: Somewhere</Text>
              <Text style={styles.listItem}>Employee Rating: 4.5/5</Text>
              <Text style={styles.listItem}>Employer Rating: 4.7/5</Text>
            </View>
          </View>
        <View style={styles.buttonContainer}>
          <Button title="Following" color='black'/>
          <Button title="Follow" color='green'/>
          <Button title="Followers" color='black'/>
        </View>
        <TouchableOpacity>
          <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
    backgroundColor: "#003f5c",
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImage: {
      width: 150,
      height: 150,
      borderRadius: 75,
    },
    textContainer: {
      flexDirection: 'column',
    },
    titleText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: "#fb5b5a"
    },
    listContainer: {
      flexDirection: 'column',
      color: "#fb5b5a"
    },
    listItem: {
      marginVertical: 5,
      fontSize: 16,
      color: "white"
    },
    buttonContainer: {
      flexDirection: 'row',
      marginTop: 5,
      justifyContent: 'space-between',
      width: '80%',
      color: "white"
    },
  });
  
  
  export default UserProfile;
  