import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import axios from "axios";

   
const CreatePost = ({ navigation }) => {
  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.104.19:8080/Posts/addPost",
        {
          description: description,
          adress: adress,
        }
        );
        console.log(response.data);
        navigation.navigate("home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <ScrollView>
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
      </ScrollView>
    </View>
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
    color: "white",
  },
  
  base: {
    color: "#ffffff",
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
