import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import axios from 'axios';

async function getFollowers() {
  try {
    const response = await axios.get('https://localhost:8080/users/1');

    const followers = response.data.followers;

    console.log(followers);
  } catch (error) {
    console.error(error);
  }
}

getFollowers();

const Followers = () => {
  return (
    <View>
      <Text style={{ fontSize: 22, fontWeight: 'bold', padding: 35, fontFamily: 'Roboto', textAlign: 'center' }}>User51115 have {users.length} followers</Text>
      <Button title="Go Back" color='gray'/>
      <FlatList
        style={styles.listContainer}
        data={users}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png' }}
              style={{ width: 50, height: 50 }}
            />
            <Text>{item}</Text>
            <Button title="..." color='gray'/>
          </View>
        )}
        keyExtractor={item => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 230,
    backgroundColor: '#F5F5F5',
    marginTop: 30
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC'
  }
});

export default Followers;
