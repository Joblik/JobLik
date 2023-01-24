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
   arr.push( { id: 9,  type: 'ou', message: newMsg })
   setData(arr)
   console.log(data)
  }

  return (
    <View style={styles.container}>
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
        </View>

        <TouchableOpacity style={styles.btnSend}
        onPress={handleSend}>
          <Image
            source={{ uri: 'https://img.icons8.com/small/75/ffffff/filled-sent.png' }}
            style={styles.iconSend}
          />
        </TouchableOpacity>
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
})
