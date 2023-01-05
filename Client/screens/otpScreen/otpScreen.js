import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import axios from "axios";

const OTP = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");

  function validateForm() {
    return email.length > 0 && otp.length > 0;
  }

  async function handleSubmit() {
    try {
      const response = await axios.post(
        "http://192.168.104.12:8080/Users/otp",
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
    <View>
      <Text>Enter the OTP code sent to your email:</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        placeholder="OTP"
        onChangeText={(e) => setOTP(e)}
      />
      <Button
        title="Verify"
        onPress={handleSubmit}
        disabled={!validateForm()}
      />
    </View>
  );
};

export default OTP;
