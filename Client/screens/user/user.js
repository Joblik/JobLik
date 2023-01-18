import React,{useState,useEffect} from 'react';
import {View, Text, TouchableOpacity,StyleSheet,TextInput,ScrollView,Image} from 'react-native';
import axios from 'axios';
const User = ({navigation}) => {
    const [userId, setUserId] = useState([]);
    console.log('helllo')
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await axios.get("http://192.168.68.145:3000/user/63c16608f9801cdcccbb602a");
          const user = response.data;
          setUserId(user);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchUser();
    }, [userId]);
  
        console.log("🚀 ~ file: UserProfile.js:49 ~ Profile ~ userId", userId)
      
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <View style={styles.headerCenterContainer}> 
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search"
                    />
                </View>
            
            </View>
            
            <ScrollView  style={styles.card}>
                {/* <Image
                    style={styles.coverImage}
                    resizeMode="cover"
                />
                <Image
                    style={styles.avatarImage}
                    source={{uri: 'https://res.cloudinary.com/dqmhtibfm/image/upload/v1670924315/cld-sample.jpg'}}
                /> */}
                
                <View style={styles.statsContainer}>
                <Image
              style={[
                {
                  borderColor: "#ecf0f1",
                  borderWidth: 2,
                  borderRadius: 50,
                  height: 100,
                  width: 100,
                  marginBottom: 0,
                  marginTop: 0,
                  marginRight: 50,
                },
              ]}
              source={{
                uri: "https://scontent.ftun5-1.fna.fbcdn.net/v/t39.30808-6/301572632_619322496221354_8359942737408873830_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VQ5aMWHw95MAX8IoF7U&_nc_ht=scontent.ftun5-1.fna&oh=00_AfDgQqUjSqAOtA7Rr7NpjxbtOOtZclCyVHpIBHv9L2kCmQ&oe=63C2D1C1",
              }}
              size={120}
            />
                <TouchableOpacity
                        style={styles.statsButton}
                        onPress={() => navigation.navigate('posts')}>
                        <Text style={styles.statsButtonText}>Posts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.statsButton}
                        onPress={() => navigation.navigate('Followers')}>
                        <Text style={styles.statsButtonText}>Followers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.statsButton}
                        onPress={() => navigation.navigate('Following')}>
                        <Text style={styles.statsButtonText}>Following</Text>
                    </TouchableOpacity>
                  
                   
                </View>
                <View style={styles.card}>
  <View style={[styles.flxDirectionRow, styles.jstfyBetween]}>
    <Text style={[styles.fontBold, styles.textDark, styles.mb10, styles.f17]}>Name: {userId.email} </Text>
  </View>
  
</View>
<View style={styles.card}>
  <View style={[styles.flxDirectionRow, styles.jstfyBetween]}>
    <Text style={[styles.fontBold, styles.textDark, styles.mb10, styles.f17]}>Email: {userId.email}</Text>
  </View>
  
</View>
<View style={styles.card}>
  <View style={[styles.flxDirectionRow, styles.jstfyBetween]}>
    <Text style={[styles.fontBold, styles.textDark, styles.mb10, styles.f17]}>Phone: 20317250</Text>
  </View>
  
</View>
<View style={styles.card}>
  <View style={[styles.flxDirectionRow, styles.jstfyBetween]}>
    <Text style={[styles.fontBold, styles.textDark, styles.mb10, styles.f17]}>Job:</Text>
  </View>
  
</View>
            </ScrollView>
          
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerCenterContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    statsButtonText:{
        color : "blue"
    },
    searchBar: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        marginHorizontal: 10,
        padding: 20, 
    },
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
    },
    coverImage: {
        width: '100%',
        height: 200,
    },
    avatarImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: -50,
        marginBottom: 10,
    },
    infoContainer: {
        alignItems: 'center',
        marginTop: 10,
    },
    nameText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ecf0f1',
    },
    bioText: {
        fontSize: 15,
        color: '#999',
    },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    statsButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginHorizontal: 10,
    },
    card: {
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginTop:50,
      },
      flxDirectionRow: {
        flexDirection: 'row',
        padding:10,
      },
      jstfyBetween: {
        justifyContent: 'center'
      },
      fontBold: {
        width: 400,
        fontWeight: 'bold'
      },
      textDark: {
        width: 400,
        color: 'dark'
      },
      mb10: {
        width: 400,
        marginBottom: 10
      },
      f17: {
        width: 400,
        fontSize: 18
      }, 

});
export default User; 