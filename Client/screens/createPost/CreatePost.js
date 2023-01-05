import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Button,
  TextInput,
} from "react-native";
import Logo from "../../components/img/logo.png";
import Input from "../../components/Input";
import axios from "axios";


const CreatePost = ({navigation}) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");

  const handleSubmit = async (e) => {
    console.log("ay 7aja");
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.104.16:8080/Posts/addPost",
        {
          title: title,
          image: image,
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
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.text}>New Post</Text>
      <ImageBackground
        source={{
          uri: "https://res.cloudinary.com/dqmhtibfm/image/upload/v1672263786/JobLik_xxx8ao.png",
        }}
        style={styles.img}
      >
        <Text style={styles.base}>Title</Text>
        <TextInput
          placeholder="Insert The Title"
          style={styles.input}
          onChangeText={setTitle}
          value={title}
        />
        <Text style={styles.base}>Image</Text>
        <TextInput
          placeholder="Insert Your Image"
          style={styles.input}
          onChangeText={setImage}
          value={image}
        />
        <Text style={styles.base}>Description</Text>
        <TextInput
          placeholder="Insert The Description"
          style={styles.input}
          onChangeText={setDescription}
          value={description}
        />
        <Text style={styles.base}>Adress</Text>
        <TextInput
          placeholder="Insert Your Adress"
          style={styles.input}
          onChangeText={setAdress}
          value={adress}
        />

        <Button color="#000000" title="Post" onPress={handleSubmit}></Button>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: "black",
    textAlign: "center",
    marginBottom: 20,
  },
  desc: {
    fontSize: 10,
    color: "white",
  },
  img: {
    width: 290,
    height: 450,
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 0.5,
  },
  inbtn: {
    color: "black",
  },
  base: {
    color: "#ffffff",
    textShadowColor: "black",
    textShadowRadius: 5,
  },
  input: {
    backgroundColor: "white",
    width: 150,
    height: 50,
    marginBottom: 20,
    marginTop: 10,
    textAlign: "center",
    borderRadius: 20,
  },
});

export default CreatePost;
