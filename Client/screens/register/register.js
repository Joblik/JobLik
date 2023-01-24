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
  KeyboardAvoidingView
} from "react-native";
import Logo from "../../components/img/logo.png";
import client from "../../api/client";

const Register = ({ navigation }) => {
  const { height } = Dimensions.get("window");
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function validateForm() {
    return (
      username.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword === password
    );
  }

  async function handleSubmit() {
    try {
      const result = await client.post("/user/register",
        {
         username,
          email,
          password,
        }
      );
      alert(result.data.message);
      navigation.navigate("otp");
    } catch (error) {
      console.log(error);
      alert(error.result.data.message);
    }
  }
  return (
    <KeyboardAvoidingView behavior="position" style={styles.ScrollView}>
    <ScrollView contentContainerStyle={styles.contentContainer}>
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
            style={styles.loginTexte}
            onPress={handleSubmit}
            disabled={!validateForm()}
          >
            Register Now
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}   onPress={()=>navigation.navigate("login") }>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
    </KeyboardAvoidingView >
  );
};
const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    scrollEnabled:false,
  },
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    // backgroundColor: "#003f5c",
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
    color: "#003f5c",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#0084ff",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: "#003f5c",
  },
  loginTexte: {
    color: "white",
  },
  ScrollView: {
    flex: 1,
    scrollEnabled:false,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default Register;
