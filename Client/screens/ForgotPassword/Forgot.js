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

const Forgot = () => {
  return (
    <SafeAreaView>

    <View style={styles.root}>
      <Image
       source={Logo}
       style={{ width: 230, height: 230 }}/>
      <Text style={styles.title}>Forgot Password</Text>
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
placeholder="Enter Email"
/>
         <Button title="Send Code" />

         <Text
          style={styles.loginText}
          
          
        >
          Code
        </Text>
        
<TextInput
style={styles.input}
placeholder="Enter Code"
/>
        <Button title="Proceed"  />
      </ImageBackground>
    </View></SafeAreaView>
  );
};


const styles = StyleSheet.create({
  title: {
    fontSize: 30,
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
    borderRadius: 15,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 20
  },
  loginText: {
    padding: 3,
    marginTop: 10
  },
  input: {
    height: 40,
    marginBottom: 5,
    borderWidth: 1,
    padding: 10,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 18
    }
});


 
export default Forgot;
