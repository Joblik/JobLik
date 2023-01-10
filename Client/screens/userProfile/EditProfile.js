import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';

const UserProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const handleSave = () => {
    // Save user details to database or storage
    const user = {
      name,
      email,
      phone,
      profileImage,
    };
    console.log(user);

  };

  return (
    <View>
      <Text>Name</Text>
      <TextInput  onChangeText={setName} />
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Phone</Text>
      <TextInput value={phone} onChangeText={setPhone} />
      <Text>Profile Image</Text>
      <Button title="Choose Image" onPress={() => {/* Choose image logic */}} />
      <Image source={{ uri: profileImage }} style={{ width: 100, height: 100 }} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default UserProfileScreen;