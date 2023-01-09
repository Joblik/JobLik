import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Footer = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <View style={{ width: "33.3%" }}>
        <Text
          style={[styles.text, { textAlign: "center" }]}
          onPress={() => navigation.navigate("UserProfile")}
        >
          Profile
        </Text>
      </View>
      <View style={{ width: "33.3%" }}>
        <Text
          style={[styles.text, { textAlign: "center" }]}
          onPress={() => navigation.navigate("home")}
        >
          Home
        </Text>
      </View>
      <View style={{ width: "33.3%" }}>
        <TouchableOpacity style={styles.pff}>
          <Text
            style={[styles.text, { textAlign: "center" }]}
            onPress={() => navigation.navigate("createPost")}
          >
            Add New Post
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 400,
    height: 80,
    backgroundColor: "#fb5b5a",
    marginTop: 700,
  },
});

export default Footer;
