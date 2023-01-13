import React, { useState } from "react";
import Logo from "../../components/img/logo.png";
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
import client from "../../api/client";


const OTP = ({ navigation }) => {
  const { height } = Dimensions.get("window");

  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");

  function validateForm() {
    return email.length > 0 && otp.length > 0;
  }

  async function handleSubmit() {
    try {
      const response = await client.post(
        "/user/otp",
        {
          email,
          otp,
        }
      );
      alert(response.data.message);
      navigation.navigate("login");
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
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={(e) => setEmail(e)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="OTP..."
            placeholderTextColor="#003f5c"
            onChangeText={(e) => setOTP(e)}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={styles.loginText}
            onPress={handleSubmit}
            disabled={!validateForm()}
          >
            Verify
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
    padding: 80,
    flex: 1,
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
    backgroundColor: "#003f5c",
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

export default OTP;
