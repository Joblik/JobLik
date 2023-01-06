import React, { useState } from "react";
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

import Logo from "../../components/img/logo.png";
import axios from "axios";

const Register = ({ navigation }) => {
  const { height } = Dimensions.get("window");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function validateForm() {
    return (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword === password
    );
  }

  async function handleSubmit() {
    try {
      const response = await axios.post(
        "http://192.168.104.15:8080/Users/register",
        {
          name,
          email,
          password,
        }
      );
      alert(response.data.message);
      navigation.navigate("otp");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.5 }]} />
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Name..."
            placeholderTextColor="#003f5c"
            onChangeText={(e) => {
              setName(e);
            }}
          />
        </View>
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
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password..."
            placeholderTextColor="#003f5c"
            onChangeText={(e) => {
              setConfirmPassword(e);
            }}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={styles.loginText}
            onPress={handleSubmit}
            disabled={!validateForm()}
          >
            Register Now
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
    flex: 1,
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
export default Register;
