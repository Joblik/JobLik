import React from 'react'
import { StyleSheet, Text, View , TextInput , Image } from 'react-native';
function Login() {
  return (
    <View>
    <Image
        source={require("../img/logo.png")}
      /> 
      <Text>Login</Text>
       <View  >
    <TextInput
        style={styles.input}
        placeholder="Your Name"
      /> 
      <TextInput
        style={styles.input}
        placeholder="Your Password" 
      /> 
      </View>
      <Text>heloo</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
   backgroundColor: "white"
 },
//...
});

export default Login