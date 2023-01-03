import React, { useState } from "react";
import { useLinkTo } from '@react-navigation/native';
   
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
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

 
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
   
    try {
       const user = await axios.post("http://localhost:8080/Users/login", {
      email,
      password,
    });

      if (user) {
        navigation.navigate("register");
        console.log(user.data.id);
        localStorage.setItem("token", user.data.token);
        localStorage.setItem("id", user.data.id);
      }
    } catch (error) {
      console.log(JSON.stringify(error.message) );
      alert("error");
    }
  }

  return (
    <SafeAreaView>

    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
      <ImageBackground
        source={{
          uri: "https://res.cloudinary.com/dqmhtibfm/image/upload/v1672263786/JobLik_xxx8ao.png",
        }}
        style={styles.img}
      >
        <Text
          style={styles.loginText}
          
          
        >
          Email
        </Text>
        
<TextInput
style={styles.input}
onChangeText={(e) => {
   setEmail(e)}}
placeholder="Email"
/>
         
        <Text
          style={styles.loginText}
          onChange={(e) => setPassword(e.target.value)}
        >
          Password
        </Text>
        <TextInput
style={styles.input}
onChangeText={(e) => {
   setPassword(e)}}
placeholder="email"
/>
         <Button title="Login"  onPress={handleSubmit}/>
        <Button title="Forgot password" />
      </ImageBackground>
      <Button title="connect with Google" />
    </View></SafeAreaView>
  );
};


const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: "rgb(26,62,79)",
    textAlign: "center",
    marginBottom: 20,
  },
  root: {
    alignItems: "center",
    paddingBottom: "20%",
  },
  logo: {
    flex: 1,
    width: 300,
    height: 50,
    resizeMode: "contain",
  },
  img: {
    width: 290,
    height: 270,
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 0.5,
  },
  loginText: {
    padding: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    },
});


 
export default LoginScreen;
