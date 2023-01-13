import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';
import client from "../../api/client";

const Chat = () => {
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [msg, setMessage] = useState('hyhyhyhy');
  const [messages, setMessages] = useState(["1223"]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await client.get('/Msg/getAllMessage');
      setMessages(res.data.Msg);
      console.log(res.data.Msg);
    };
    fetchMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await client.post(
        "/Msg/addMessage",
        {
          msg,
          sender: sender,
          receiver: receiver,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View style={styles.container}>

      <TextInput
        style={styles.textInput}
        value={sender}
        onChangeText={text => setSender(text)}
        placeholder="Enter your username"
      />
      <TextInput
        style={styles.textInput}
        value={receiver}
        onChangeText={text => setReceiver(text)}
        placeholder="Enter the receiver's username"
      />
      <TextInput
        style={styles.textInput}
        value={msg}
        onChangeText={text => setMessage(text)}
        placeholder="Enter your msg"
      />
      <Button onPress={handleSubmit} title="Send" style={styles.button}/>
      <FlatList
        style={styles.messageContainer}
        data={messages}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.messageText}>{item.sender}: {item.msg}</Text>
          </View>
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    margin: 10,
    width: '90%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  messageContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
    width: '90%'
  },
  messageText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'left'
  },
});
export default Chat;
