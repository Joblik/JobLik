import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Input = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    height: 40,
    width:200,
    margin: 12,
    borderWidth: 1,
    padding: 10, 
  },
});

export default Input;