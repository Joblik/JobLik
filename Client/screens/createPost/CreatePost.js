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
  const [userId, setUserId] = useState(null);  
  useEffect(() => {
    async function getUserId() {
      const id = await AsyncStorage.getItem("id"); 
      setUserId(JSON.parse(id)); 
    }
    getUserId();
    console.log("hyhy");
  }, []);

  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(

        "http://192.168.104.16:3000/post/addPost",

     {
          description: description,
          adress: adress,
          userId: userId, // use the userId state variable here
          title: title,
          img: img,
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
            <Text style={styles.base}>Title</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Insert The Title"
                style={styles.inputText}
                onChangeText={setTitle}
                value={title}
              />
            </View>
            <Text style={styles.base}>Description</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Insert The Description"
                style={styles.inputDesc}
                onChangeText={setDescription}
                value={description}
              />
            </View>
            <Text style={styles.base}>Address</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Insert Your Address"
                style={styles.inputText}
                onChangeText={setAdress}
                value={adress}
              />
              <Text style={styles.base}>Image Link</Text>
            <View style={styles.inputView}>
              <TextInput
                placeholder="Insert The Image Link"
                style={styles.inputText}
                onChangeText={setImg}
                value={img}
              />
            </View>
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
    marginBottom: 15,
    
  },
  desc: {
    fontSize: 10,
    color: "#003f5c",
  },
  
  base: {
    color: "#003f5c",
    textShadowColor: "black",
    textShadowRadius: 2,
  },
  inputText: {
    backgroundColor: "white",
    width: 300,
    height: 50,
    marginBottom: 20,
    marginTop: 10,
    textAlign: "center",
    borderRadius: 2,
  },
  inputDesc: {
    backgroundColor: "white",
    width: 300,
    height: 150,
    marginBottom: 20,
    marginTop: 10,
    textAlign: "center",
    borderRadius: 2,
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
