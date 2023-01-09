import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';
import axios from 'axios';

const Chat = () => {
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get(`http://192.168.1.175:8080/Chats/fetchMessages/${sender}/${receiver}`);
      setMessages(res.data.messages);
    };
    fetchMessages();
  }, []);

  const sendMessage = async () => {
    try {
      await axios.post('http://192.168.1.175:8080/Chats/sendMessage', { sender, receiver, message });
      setMessage('');
      const res = await axios.get(`http://192.168.1.175:8080/Chats/fetchMessages/${sender}/${receiver}`);
      setMessages(res.data.messages);
    } catch (error) {
      console.error(error);
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
        value={message}
        onChangeText={text => setMessage(text)}
        placeholder="Enter your message"
      />
      <Button onPress={sendMessage} title="Send" />
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View>
            <Text>{item.sender}: {item.message}</Text>
          </View>
        )}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default Chat;
