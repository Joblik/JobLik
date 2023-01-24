import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View,Dimensions } from "react-native";
import client from "../../api/client"
import { useNavigation } from "@react-navigation/native";
const AllChat = () => {
  const navigation = useNavigation();
    const [messages, setMessages] = useState([]);
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    useEffect(() => {
        client.get("/chat/getAllMessage")
        .then((response) => {
            setMessages(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <View style={[styles.allChat, styles.allChatBg]}>
            <View style={[styles.allChatWrapper, styles.image1IconPosition , {width:screenWidth}]}>
                <Text style={[styles.allChat1, styles.textFlexBox, styles.monadaTypo]}>
                    All Chats
                </Text>
            </View>
            {messages.map(message => (
                <MessageItem message={message} key={message._id} navigation={navigation} />
            ))}
        </View>
    );
};

const MessageItem = ({ message , navigation }) => {
    return (
        <View style={[styles.monadaParent, styles.allChatBg,{marginLeft:15}]}>
            <Text style={[styles.monada, styles.textFlexBox, styles.monadaTypo,{marginTop:22}]}
             onPress={()=>navigation.navigate("OneChat",{ messageId: message._id }) }
            >
                {message.receiver}
            </Text>
            <Image
                style={styles.unsplash1onzhgu751aIcon}
                resizeMode="cover"
                source={require("../../components/images/1.jpg")}
            />
            <Text style={[styles.text, styles.textFlexBox]}>{message.createdAt}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  allChatBg: {
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  image1IconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: "Roboto",
    position: "absolute",
  },
  monadaTypo: {
    fontSize: 24,
    display: "flex",
    textAlign: "left",
    fontFamily: "Roboto",
  },
  image1Icon: {
    width: 387,
    height: 675,
  },
  allChat1: {
    top: 26,
    left: 12,
    fontWeight: "700",
    color: "#fff",
    width: 175,
    height: 45,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  allChatWrapper: {
    backgroundColor: "#2d9cdb",
    width: 375,
    height: 86,
    overflow: "hidden",
  },
  monada: {
    left: 99,
    color: "#000",
    width: 98,
    height: 83,
    top: 0,
    fontSize: 24,
  },
  unsplash1onzhgu751aIcon: {
    top: 14,
    left: 27,
    width: 55,
    height: 55,
    position: "absolute",
  },
  text: {
    top: 33,
    left: 315,
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.79)",
    width: 45,
    height: 17,
  },
  monadaParent: {
    top: 97,
    left: 8,
    borderRadius: 20,
    width: 360,
    height: 77,
    position: "absolute",
    overflow: "hidden",
  },
  allChat: {
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
  },
});

export default AllChat;
