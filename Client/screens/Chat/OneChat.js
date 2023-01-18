import * as React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
// import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const OneChatIcon = () => {
  return (
    <ImageBackground
      style={styles.oneChatIcon}
      resizeMode="cover"
      source={require("../assets/onechat.png")}
    >
      <View style={[styles.oneChatChild, styles.oneLayout]} />
      <Text style={[styles.salut, styles.salutTypo]}>salut</Text>
      <View style={[styles.oneChatItem, styles.hoyPosition]} />
      <Text style={[styles.hoy, styles.hoyPosition]}>
        <Text style={styles.hoyTxt}>
          <Text style={styles.hoy1}>Hoy</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
      </Text>
      <View style={styles.component1}>
        <View style={[styles.allChatWrapper, styles.allChatWrapperPosition]}>
          <Text style={[styles.allChat, styles.allTypo]}>Monada</Text>
        </View>
        <Text style={[styles.allChat1, styles.allTypo]}>Monada</Text>
        <Image
          style={styles.unsplash1onzhgu751aIcon}
          resizeMode="cover"
          source={require("../assets/unsplash1onzhgu751a.png")}
        />
      </View>
      <View style={styles.component2}>
        <View style={[styles.component2Child, styles.allChatWrapperPosition]} />
        <Text style={styles.yourMessageHere}>Your Message Here...</Text>
      </View>
      <View style={[styles.oneChatInner, styles.oneLayout]} />
      <Text style={[styles.hello, styles.salutTypo]}>hello</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  oneLayout: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    height: 48,
    width: 178,
    borderBottomLeftRadius: Border.br_sm,
    borderBottomRightRadius: Border.br_sm,
    borderTopRightRadius: Border.br_sm,
    backgroundColor: Color.white,
    position: "absolute",
  },
  salutTypo: {
    height: 46,
    width: 153,
    textAlign: "right",
    alignItems: "center",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.nice,
    fontSize: FontSize.size_sm,
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
    color: Color.white,
    fontWeight: "700",
    fontSize: FontSize.nice_size,
    textAlign: "left",
    alignItems: "center",
    fontFamily: FontFamily.nice,
    position: "absolute",
  },
  oneChatChild: {
    top: 126,
    left: 353,
  },
  salut: {
    top: 127,
    left: 190,
  },
  oneChatItem: {
    backgroundColor: Color.gray_100,
  },
  hoy1: {
    color: "#e5e5e5",
  },
  text: {
    color: Color.black,
  },
  hoyTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  hoy: {
    textAlign: "center",
    alignItems: "center",
    fontFamily: FontFamily.nice,
    fontSize: FontSize.size_sm,
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
    backgroundColor: Color.blue2,
    overflow: "hidden",
  },
  allChat1: {
    height: "52.33%",
    width: "46.67%",
    top: "18.6%",
    left: "17.6%",
    display: "flex",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.white,
    fontWeight: "700",
    fontSize: FontSize.nice_size,
  },
  unsplash1onzhgu751aIcon: {
    height: "63.95%",
    width: "14.67%",
    top: "13.95%",
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
    height: 86,
    position: "absolute",
  },
  component2Child: {
    borderRadius: Border.br_md,
    backgroundColor: Color.white,
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
    color: Color.gray_100,
    textAlign: "left",
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.nice,
    position: "absolute",
  },
  component2: {
    top: 621,
    left: 13,
    width: 355,
    height: 40,
    position: "absolute",
  },
  oneChatInner: {
    top: 184,
    left: 191,
  },
  hello: {
    top: 186,
    left: -94,
  },
  oneChatIcon: {
    flex: 1,
    height: 667,
    overflow: "hidden",
    width: "100%",
  },
});

export default OneChatIcon;