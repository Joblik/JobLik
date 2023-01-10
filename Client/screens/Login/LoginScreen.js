import React, { useState, useEffect } from "react";
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
  KeyboardAvoidingView ,
} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import * as google from 'expo-auth-session/providers/google'

WebBrowser.maybeCompleteAuthSession();
const LoginScreen = ({ navigation }) => {
  const {height} = Dimensions.get('window')
  const [email, setEmail] = useState("");
  const [accessToken, setAccessToken] = useState(null);
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

const [request,response,promptAsync] = google.useIdTokenAuthRequest({
  clientId : "957226030438-2bf3s4mnhov6qqqfdpcq2rh3ujev216j.apps.googleusercontent.com",
  iosClientId: "957226030438-85cn449iofvmm7pfgb1thfb58sbttvm5.apps.googleusercontent.com"
})

React.useEffect(()=>{
  if(response?.type === "success"){
    setAccessToken(response.authentication.accessToken);
    accessToken && fetchUserInfo();
  }
},[response,accessToken])

async function fetchUserInfo(){
  let response = await fetch("https://googleapis.com/userinfo/v2/me",{
    headers:{Authorization:`Bearer ${accessToken}`}
  });
  const userInfo = await response.json();
  setUser(userInfo);
} 
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit() {
    try {
      const user = await axios.post("http://192.168.104.26:8080/Users/login", {
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
  const SignInWithGoogle = () => {
    return (
      <TouchableOpacity disabled={!request} onPress={() => {
        promptAsync()
      }}>
        <Text style={styles.loginText}>Sign In With Google</Text>
        <Image source={require("../../assets/btn.png")} style={{ width: 300, height: 40 }} />
      </TouchableOpacity>
    )
  }

  return (
  <KeyboardAvoidingView behavior="position" style={styles.ScrollView}>
    <ScrollView contentContainerStyle={styles.contentContainer} >
      <SafeAreaView style={styles.container}>
        <Image source={Logo} style={[styles.logo ,{height:height * 0.50}]} />
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
            style={styles.loginTexte}
            onPress={handleSubmit}
            disabled={!validateForm()}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity>
        
        {user === null && <SignInWithGoogle />}

      
      
          <TouchableOpacity style={styles.google} disabled={!request} onPress={()=> {
  promptAsync()
}}>
 
  <Image  source={require("../../assets/btn.png")} style={{width: 300, height: 40}} />
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
    backgroundColor: "#003f5c",
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
  google: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  }
});

export default LoginScreen;