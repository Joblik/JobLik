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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

 
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
   
    try {
      const user = await axios.post("http://192.168.104.6:8080/Users/login", {
        email,
        password,
      });

      if (user) {
        navigation.navigate("home");
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
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
       fontSize: null,
    color: "#fb5b5a",
    marginBottom: 5,
  
  },
  inputView: {
    width: "80%",
    backgroundColor: "#FFFF",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
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
