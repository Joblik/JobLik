import React, { useState } from "react";
import Logo from "../../components/img/logo.png";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const {height} = Dimensions.get('window')
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit() {
    try {
      const user = await axios.post("http://192.168.104.19:8080/Users/login", {
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

    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.5 }]} />
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={(e) => {
              setEmail(e);
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={(e) => {
              setPassword(e);
            }}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={styles.loginText}
            onPress={handleSubmit}
            disabled={!validateForm()}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.loginText}
            onPress={() => navigation.navigate("register")}
          >
            Signup
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
    padding: 80,
    },
  logo: {
    marginBottom: 20,
    width: "100%",
    height: 400,
 flex:1  
 },
  inputView: {
    width: "100%",
    backgroundColor: "#FFFF",
    borderRadius: 25,
    height: 55,
    marginBottom: 25,
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
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});

export default LoginScreen;