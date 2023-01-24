import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, ImageBackground,Dimensions } from "react-native";
import client from "../../api/client"

const OneChatIcon = ({navigation , route}) => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const { messageId } = route.params;
    const [message, setMessage] = useState({});
    const [text, setText] = useState('');

    useEffect(() => {
        client.get(`/chat/getOnemsg/${messageId}`)
        .then((response) => {
            setMessage(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const onSendMessage = () => {
      // send message to backend
      client.post(`/chat/sendMessage/${messageId}`, { msg: text })
        .then(response => {
          setMessage(response.data);
          console.log(response.data);
          setText('');
        })
        .catch(error => console.log(error));
    }

  return (
    <ImageBackground
      style={[styles.oneChatIcon, {width: screenWidth, height: screenHeight}]}
      resizeMode="cover"
      source={require("../../components/images/griis.jpg")}
    >
      <View style={[styles.oneChatChild, styles.oneLayout]} />
      <Text style={[styles.salut, styles.salutTypo]}>
        {message.map(msg => {
          if (msg.sender === 'you') {
            return <Text>{msg.msg}</Text>
          }
        })}
      </Text>
      <View style={[styles.oneChatItem, styles.hoyPosition]} />
      <Text style={[styles.hoy, styles.hoyPosition]}>
        <Text style={styles.hoyTxt}>
          <Text style={styles.hoy1}>Hoy</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
      </Text>
     

      <View style={[styles.component1,{width: screenWidth}]}>
<View style={[styles.allChatWrapper, styles.allChatWrapperPosition]}>
<Text>{message.msg}</Text>
</View>
<Text style={[styles.allChat1, styles.allTypo]}>{message.receiver}</Text>
<Image
style={[styles.unsplash1onzhgu751aIcon]}
resizeMode="cover"
source={require("../../components/images/griis.jpg")}
/>
</View>
<View style={styles.component2}>
<View style={[styles.component2Child, styles.allChatWrapperPosition]}>
<TextInput
         style={styles.input}
         placeholder="Type your message here..."
       />
<TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>Send</Text>
</TouchableOpacity>
</View>
</View>
<View style={[styles.oneChatInner, styles.oneLayout]}>
<Text style={[styles.hello, styles.salutTypo]}>
{message.messages.map(msg => {
if (msg.sender !== 'you') {
return <Text>{msg.msg}</Text>
}
})}
</Text>
</View>
</ImageBackground>
  )};

const styles = StyleSheet.create({
  oneLayout: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 48,
    width: 178,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: "#fff",
    position: "absolute",
  },
  salutTypo: {
    height: 46,
    width: 153,
    textAlign: "right",
    alignItems: "center",
    display: "flex",
    color: "#000",
    fontFamily: "Roboto",
    fontSize: 13,
    position: "absolute",
  },
  hoyPosition: {
    height: 16,
    width: 66,
    left: 154,
    top: 96,
    position: "absolute",
  },
  allChatWrapperPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  allTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: "#fff",
    fontWeight: "700",
    fontSize: 24,
    textAlign: "left",
    alignItems: "center",
    fontFamily: "Roboto",
    position: "absolute",
  },
  oneChatChild: {
    top: 126,
    left: 220,
  },
  salut: {
    top: 138,
    left: 190,
  },
  oneChatItem: {
    backgroundColor: "#c4c4c4",
  },
  hoy1: {
    color: "#e5e5e5",
  },
  text: {
    color: "#000",
  },
  hoyTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  hoy: {
    textAlign: "center",
    alignItems: "center",
    fontFamily: "Roboto",
    fontSize: 13,
    width: 66,
    left: 154,
    top: 96,
    display: "flex",
  },
  allChat: {
    top: 17,
    left: 12,
    display: "none",
    width: 175,
    height: 45,
  },
  allChatWrapper: {
    backgroundColor: "#2d9cdb",
    overflow: "hidden",
  },
  allChat1: {
    height: "52.33%",
    width: "46.67%",
    top: 35,
    left: "17.6%",
    display: "flex",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: "#fff",
    fontWeight: "700",
    fontSize: 24,
  },
  unsplash1onzhgu751aIcon: {
    height: "63.95%",
    width: "14.67%",
    top: 25,
    right: "84%",
    bottom: "22.09%",
    left: "1.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  component1: {
    top: 0,
    left: -1,
    width: 375,
    height: 100,
    position: "absolute",
  },
  component2Child: {
    borderRadius: 20,
    backgroundColor: "#fff",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  yourMessageHere: {
    height: "92.5%",
    width: "41.69%",
    top: "7.5%",
    left: "4.51%",
    fontSize: 14,
    color: "#c4c4c4",
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: "Roboto",
    position: "absolute",
  },
  component2: {
    bottom: 20,
    left: 13,
    width: 355,
    height: 40,
    position: "absolute",
  },
  oneChatInner: {
    top: 184,
    left: 15,
  },
  hello: {
    top: 195,
    left: -94,
  },
  oneChatIcon: {
    flex: 1,
    height: 667,
    overflow: "hidden",
    width: "100%",
    height:"100%"
  },
});

export default OneChatIcon;
