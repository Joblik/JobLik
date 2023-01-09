import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const Footer = ({ navigation , style}) => {
  return (
    <View  style={styles.footerWrapper}>
    <View style={[styles.root, style]}>
      <View style={{ width: "33.3%" }}>
        <Text
          style={[styles.text, { textAlign: "center" }]}
          onPress={() => navigation.navigate("userProfile")}
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
    </View></View>
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
  footerWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
});

export default Footer;
