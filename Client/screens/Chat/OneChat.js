import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native'

export default OneChat = () => {
  const [data, setData] = useState([
    { id: 1, type: 'in', message: 'aasslema' },
    { id: 2, type: 'out', message: 'aasslema' },
    { id: 3,  type: 'in', message: 'Bllehy lkitek mhabet tlaouej aala dahen ?' },
    { id: 5,  type: 'out', message: 'eey hachti b dahen en urgence' },
    { id: 6, type: 'out', message: 'enty dispo ?' },
    { id: 7,  type: 'in', message: 'eeyih , behy nty hattet mawjoud f laaouina ena mch baaid aalik kolli wakteh theb njiik ?' },
    { id: 8,  type: 'out', message: 'ghodoua sbeeh ntkablou 9h fl aaouina yssedek ?' },
    { id: 9,  type: 'in', message: 'Ok mrygll, sbeeh netlakaou fl aaouina o taou nkallmek kbal manjii' },
    { id: 2, type: 'out', message: 'Mrygll o merci beaucoup' },

  ]) 

  const [messages, setMessages] = useState(data)
  const [newMsg, setNewMsg] = useState("")

  const handleSend = ()=>{
   arr = data 
   arr.push( { id: 9,  type: 'out', message: newMsg })
   setData(arr)
   console.log(data)
  }

  return (
    <View style={styles.container}>
       <View style={styles.component1}>
        <View style={[styles.allChatWrapper, styles.allChatWrapperPosition]}>
          <Text style={[styles.allChat, styles.allTypo]}>Monada</Text>
        </View>
        <Text style={[styles.allChat1, styles.allTypo]}>Monada</Text>
        <Image
          style={styles.unsplash1onzhgu751aIcon}
          resizeMode="cover"
          source={require("../../components/images/1.jpg")}
        />
      </View>
  
        <FlatList
        style={styles.list}
        data={messages}
        keyExtractor={item => {
          return item.id
        }}
        renderItem={message => {
          const item = message.item
          let inMessage = item.type === 'in'
          let itemStyle = inMessage ? styles.itemIn : styles.itemOut
          return (
            <View style={[styles.item, itemStyle]}>
              {!inMessage}
              <View style={[styles.balloon]}>
                <Text>{item.message}</Text>
              </View>
              {inMessage}
            </View>
          )
        }}
      />
      
      
       <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Write a message..."
            underlineColorAndroid="transparent"
            onChangeText={msg => setNewMsg(msg)}
          />

        <TouchableOpacity style={styles.btnSend}
        onPress={handleSend}>
          <Image
            source={{ uri: 'https://img.icons8.com/small/75/ffffff/filled-sent.png' }}
            style={styles.iconSend}
          />
        </TouchableOpacity>
        </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 17,
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#eeeeee',
    paddingHorizontal: 10,
    padding: 5,
    
  },
  btnSend: {
    backgroundColor: '#00BFFF',
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20,
  },
  itemIn: {
    alignSelf: 'flex-start',
    backgroundColor: '#f2ffff',
    borderColor: 'black',
    borderWidth: 0.8
  },
  itemOut: {
    alignSelf: 'flex-end',
    backgroundColor: '#f2ffff',
    borderColor: 'black',
    borderWidth: 0.8

  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#E0FFFF',
    borderRadius: 300,
    padding: 5,
  },
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
    left: 153,
    top: 97,
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
    top: 127,
    left: 352,
  },
  salut: {
    top: 128,
    left: 189,
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
    left: 153,
    top: 97,
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
    top: "18.6%",
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
    top: "13.95%",
    right: "84%",
    bottom: "22.09%",
    left: "1.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
    borderRadius: 50
  },
  component1: {
    top: 0,
    left: -1,
    width: 375,
    height: 86,
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
    top: 622,
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
    height: 668,
    overflow: "hidden",
    width: "100%",
  },
})
