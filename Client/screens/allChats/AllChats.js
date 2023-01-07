import React from 'react'
import { View , Text , Image , StyleSheet , ImageBackground, Button, TextInput, TouchableOpacity} from 'react-native'
import Logo from '../../components/img/logo.png'
import Input from '../../components/Input'

const chats = [
    {
        user: 'user1',
        lastMsg: 'hey!'
    },
    {
        user: 'user2',
        lastMsg: 'Hello World'
    },
    {
        user: 'user3',
        lastMsg: 'how are u?'
    },
    {
        user: 'user4',
        lastMsg: 'lorem ipsum dolor sit amet'
    },
]

const AllChats = () => {
    return (
      <View>
        <Text style={styles.sectionTitle}>Chats</Text>
        {chats.map((chat) => (
          <TouchableOpacity style={styles.chatContainer} key={chat.user}>
            <View style={styles.chatBox}>
              <Text style={styles.title}>{chat.user}</Text>
              <Text style={styles.subtitle}>{chat.lastMsg}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      padding: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 16,
    },
    chatContainer: {
      margin: 10,
    },
    chatBox: {
      padding: 20,
      backgroundColor: '#f2f2f2',
    },
  });

  export default AllChats