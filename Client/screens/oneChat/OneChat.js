import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

const conversation = [
  {
    author: 'User 1',
    message: 'Hello',
  },
  {
    author: 'User 2',
    message: 'Hello',
  },
  {
    author: 'User 1',
    message: 'How are you',
  },
  {
    author: 'User 2',
    message: 'Fine wbu',
  },
  {
    author: 'User 1',
    message: 'Same ty, I would like to get informations',
  },
  {
    author: 'User 2',
    message: "Tell me I'm listening",
  },
];

const OneChat = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {conversation.map((message) => (
        <View key={message.author} style={styles.messageContainer}>
          <Text style={styles.author}>{message.author}:</Text>
          <Text>{message.message}</Text>
        </View>
      ))}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Button title="Send" />
      </View>
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

const OneChatScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="OneChat"
      component={OneChat}
      options={{
        headerLeft: () => (
          <Button title="Back" onPress={() => navigation.goBack()} />
        ),
        headerTitle: 'One Chat',
      }}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  messageContainer: {
    marginBottom: 20,
  },
  author: {
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
});

export default OneChatScreen;
