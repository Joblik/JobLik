import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import client from "../../api/client";

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    client
      .post("/Users/forget-pasword", { email })
      .then((res) => {
        alert(
          "An email with a link to reset your password has been sent to your email address" 
        );
        navigation.navigate("login");
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred. Please try again.");
      });
  };
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text style={styles.title}>recover your account</Text>
        <ImageBackground
          source={{
            uri: "https://res.cloudinary.com/dqmhtibfm/image/upload/v1672263786/JobLik_xxx8ao.png",
          }}
          style={styles.img}
        >
          <Text style={styles.loginText}>set email</Text>

          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(e) => {
              setEmail(e);
            }}
          />

          <Button title="Submit" onPress={handleSubmit} />
        </ImageBackground>
      </View>
    </SafeAreaView>
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

export default ForgotPassword;
