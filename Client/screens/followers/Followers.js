import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';

const users = ["user1","user2","user646","user4551","user36232","user6411","user6161","user494841","user656213","user9562","user65659","user652626","user956526","user595962","user965652","user595236"];

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
