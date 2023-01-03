import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Button,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../../components/img/logo.png";
import axios from "axios";

const Register = ({ navigation }) => {
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
      const user = await axios.post(
        "http://192.168.104.15:8080/Users/register",
        {
          name,
          email,
          password,
        }
      );
      alert("Account has been created");
      navigation.navigate("login");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  }
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.title}>Register</Text>
        <ImageBackground
          source={{
            uri: "https://res.cloudinary.com/dqmhtibfm/image/upload/v1672263786/JobLik_xxx8ao.png",
          }}
          style={styles.img}
        >
          <Text style={styles.base}>Name</Text>
          <TextInput
            placeholder="Insert Name"
            style={styles.inpt}
            onChangeText={(e) => {
              setName(e);
            }}
          />
          <Text style={styles.base}>Email</Text>
          <TextInput
            placeholder="Insert Email"
            style={styles.inpt}
            onChangeText={(e) => {
              setEmail(e);
            }}
          />
          <Text style={styles.base}>Password</Text>
          <TextInput
            placeholder="Insert Password"
            style={styles.inpt}
            onChangeText={(e) => {
              setPassword(e);
            }}
          />
          <Text style={styles.base}>Confirm Password </Text>
          <TextInput
            placeholder="Password Confirmation"
            style={styles.inpt}
            onChangeText={(e) => {
              setConfirmPassword(e);
            }}
          />
          <Button
            color="#000000"
            title="Register Now"
            onPress={handleSubmit}
            disabled={!validateForm()}
          ></Button>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingBottom: "10%",
  },
  logo: {
    flex: 1,
    width: 300,
    height: 50,
    resizeMode: "contain",
  },
  title: {
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
  inpt: {
    backgroundColor: "white",
    width: 150,
    height: 50,
    marginBottom: 20,
    marginTop: 10,
    textAlign: "center",
    borderRadius: 20,
  },
});
export default Register;
