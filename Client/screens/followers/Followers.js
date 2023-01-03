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
  'Some-Composed Longname',
];

// Ajout d'une palette de couleurs
const colors = {
  primary: '#00000F',
  secondary: '#00000F',
  tertiary: 'lightgray',
  black: '#000',
};

// Mise à jour des styles pour utiliser la palette de couleurs
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.tertiary,
    borderWidth: 1,
    borderColor: colors.black,
    overflow: 'hidden',
    borderRadius: 15,
    padding: 22,
    marginBottom: 5,
lineHeight: 20,
width: 230,
},
list: {
  marginTop: 20,
  marginBottom: 270,
  padding: 5
},
});

const Followers = () => (
  <SafeAreaProvider>
    <View style={styles.container}>
      <Text style={{ fontSize: 33, fontWeight: 'bold', padding: 30, fontFamily: 'Roboto', textAlign: 'center' }}>Followers</Text>
      <Button title="Go Back" color={colors.primary}></Button>
      <View style={styles.list}>
        <FlatList
          data={names}
          renderItem={({ item }) => {
            let name = item;
            if (item.length > 11) {
              name = `${item.substring(0, 11)}...`;
            }
            return (
              <View style={styles.item}>
                <Text style={{ fontSize: 20, color: colors.primary, fontFamily: 'Roboto' }}>{name}</Text>
                <Button title="..." color={colors.tertiary}></Button>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  </SafeAreaProvider>
);

export default Followers;
