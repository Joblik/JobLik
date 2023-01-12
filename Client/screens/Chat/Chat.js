import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';
import client from "../../api/client";

const Chat = () => {
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [msg, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get('http://192.168.104.16:8080/Msg/getAllMessage');
      setMessages(res.data.Msg);
      console.log(res.data.Msg);
    };
    fetchMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.104.16:8080/Msg/addMessage",
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
    <View>
      <View>
      <Text>hhhhhhhhhhhhhhhhhhhhh</Text>
      </View>
      <View>
      <Text>hhhhhhhhhhhhhhhhhhhhh</Text>
      </View>
      <View>
      <Text>hhhhhhhhhhhhhhhhhhhhh</Text>
      </View>
      <View>
      <Text>hhhhhhhhhhhhhhhhhhhhh</Text>
      </View>
      <View>
      <Text>hhhhhhhhhhhhhhhhhhhhh</Text>
      </View>
      <View>
      <Text>hhhhhhhhhhhhhhhhhhhhh</Text>
      </View>
      <TextInput
        value={sender}
        onChangeText={text => setSender(text)}
        placeholder="Enter your username"
      />
      <TextInput
        value={receiver}
        onChangeText={text => setReceiver(text)}
        placeholder="Enter the receiver's username"
      />
      <TextInput
        value={msg}
        onChangeText={text => setMessage(text)}
        placeholder="Enter your msg"
      />
      <Button onPress={handleSubmit} title="Send" />
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View>
            <Text>{item.sender}: {item.msg}</Text>
          </View>
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default Chat;
