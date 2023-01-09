import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from "axios";

   
const CreatePost = ({ navigation }) => {
  const [userId, setUserId] = useState(null);  // create a state variable for the user's _id

  useEffect(() => {
    async function getUserId() {
      const id = await AsyncStorage.getItem("id");  // retrieve the user's _id from AsyncStorage
      setUserId(JSON.parse(id));  // update the state variable with the user's _id
    }
    getUserId();
    
  }, []);

  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.104.21:8080/Posts/addPost",
        {
          description: description,
          adress: adress,
          userId: userId, // use the userId state variable here
        }
      );
      console.log(response.data);
      navigation.navigate("home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <KeyboardAvoidingView behavior="position" style={styles.ScrollView}>
    <ScrollView contentContainerStyle={styles.contentContainer} >
    <View>
      
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>New Post</Text>
            <Text style={styles.base}>Description</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Insert The Description"
                style={styles.inputText}
                onChangeText={setDescription}
                value={description}
              />
            </View>
            <Text style={styles.base}>Adress</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Insert Your Adress"
                style={styles.inputText}
                onChangeText={setAdress}
                value={adress}
              />
            </View>

            <TouchableOpacity style={styles.postBtn}>
              <Text
                color="#000000"
                title="Post"
                style={styles.postText}
                onPress={handleSubmit}
              >
                POST
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </ScrollView>
    
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: "35%",
    flex: 1,
  },
  text: {
    fontSize: 40,
    color: "#003f5c",
    textAlign: "center",
    marginBottom: 18,
    
  },
  desc: {
    fontSize: 10,
    color: "#003f5c",
  },
  
  base: {
    color: "#003f5c",
    textShadowColor: "black",
    textShadowRadius: 5,
  },
  inputText: {
    backgroundColor: "white",
    width: 300,
    height: 50,
    marginBottom: 20,
    marginTop: 10,
    textAlign: "center",
    borderRadius: 20,
  },
  postBtn: {
    width: 90,
    backgroundColor: "#003f5c",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "93%",
  },
  postText: {
    color: "white",
  },
});

export default CreatePost;
