import React, { useState } from "react";
import { useLinkTo } from "@react-navigation/native";
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
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit() {
    try {
      const user = await axios.post("http://192.168.104.6:8080/Users/login", {
        email,
        password,
      });

      if (user) {
        navigation.navigate("home");
        console.log(user.data.id);
        AsyncStorage.setItem("token", JSON.stringify(user.data.token));
        AsyncStorage.setItem("id", JSON.stringify(user.data.id));
      }
    } catch (error) {
      console.log(error.message);
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
          <Text style={styles.loginText}>Email</Text>

          <TextInput
            style={styles.input}
            autoCapitalize={false}
            onChangeText={(e) => {
              setEmail(e);
            }}
            placeholder="Email"
          />

          <Text style={styles.loginText}> Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => {
              setPassword(e);
            }}
            placeholder="email"
          />
          <Button
            title="Login"
            onPress={handleSubmit}
            disabled={!validateForm()}
          />
          <Button title="Forgot password" />
        </ImageBackground>
        <Button title="connect with Google" />
      </View>
    </SafeAreaView>
<<<<<<< HEAD
         
  
=======
>>>>>>> 925354979c1d7912cf8c65da85c18c02e92df711
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
