import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const names = [
    'John Doe',
    'Jane Doe',
    'Bob Smith',
    'Alice Smith',
    'Mike Williams',
    'Emily Williams',
    'Jason Brown',
    'Samantha Brown',
    'William Thompson',
    'Ashley Thompson',
    'David Johnson',
    'Sarah Johnson',
    'Richard Davis',
    'Kate Davis',
    'James Anderson',
    'Emily Anderson',
    'William Martin',
    'Samantha Martin',
    'Adam Thompson',
    'Emma Thompson',
    'Samuel Jackson',
    'Emily Jackson',
    'Charles Davis',
    'Samantha Davis',
    'Thomas Anderson',
    'Olivia Anderson',
    'James Brown',
    'Emily Brown',
    'William Smith',
    'Sophia Smith',
    'David Williams',
    'Emma Williams',
    'John Doe',
    'Jane Doe',
    'Bob Smith',
    'Alice Smith',
    'Mike Williams',
    'Emily Williams',
    'Jason Brown',
    'Samantha Brown',
    'William Thompson',
    'Ashley Thompson',
    'David Johnson',
    'Sarah Johnson',
    'Richard Davis',
    'Kate Davis',
    'James Anderson',
    'Emily Anderson',
    'William Martin',
    'Samantha Martin',
    'Adam Thompson',
    'Emma Thompson',
    'Samuel Jackson',
    'Emily Jackson',
    'Charles Davis',
    'Samantha Davis',
    'Thomas Anderson',
    'Olivia Anderson',
    'James Brown',
    'Emily Brown',
    'William Smith',
    'Sophia Smith',
    'David Williams',
    'Emma Williams',
    'Abdennour Belkadi',
    'Some-Composed Longname'
  ];

  const styles = StyleSheet.create({
    item: {
      backgroundColor: '#000123',
      borderWidth: 1,
      borderColor: 'black',
      overflow: 'hidden',
      borderRadius: 15,
      padding: 22,
      marginBottom: 5,
      lineHeight: 20,
      width: 210
    },
    list: {
      marginTop: 20,
    },
  });
  

const Followers = () => (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', padding: 20}}>Followers</Text>
        <View style={styles.list}>
          <FlatList
            data={names}
            renderItem={({ item }) => {
              let name = item;
              if (item.length > 15) {
                name = `${item.substring(0, 14)}...`;
              }
              return (
                <Text style={[styles.item, { fontSize: 20, color: 'white', fontFamily: 'sans-serif' }]}>{name}</Text>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );

export default Followers;