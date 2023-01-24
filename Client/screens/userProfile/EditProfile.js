import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Image } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import Ionic from "react-native-vector-icons/Ionicons";
import client from "../../api/client";
import * as ImagePicker from 'expo-image-picker';

const EditProfile = ({ navigation, route }) => {
  const { form } = route.params;
  const [user, setUser] = useState("");
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
const data  = {
  username,
  image,
  email,
  phone,
  job,
}
  const handleSubmit = async (userId, userData) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      client
        .put(`/users/UpdateOneUser/${userId}`, data)
        .then(res => setResponse(res.data))
        .catch(err => setError(err.message));
    }, []);
   
    if (error) {
      return { error };
    }
  };

  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        marginTop: 30,
      }}
    >
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="close-outline" style={{ fontSize: 35 }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Edit Profile</Text>
          <TouchableOpacity
            onPress={() => {
              TostMessage();
              navigation.goBack();
            }}
          >
            <Ionic
              name="checkmark"
              style={{ fontSize: 35, color: "#3493D9" }}
              onPress={() => {
                handleSubmit();
                navigation.navigate("UserProfile");
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ padding: 20, alignItems: "center" }}>
          <Image
            // defaultSource={image}
            source={{
              uri: image
            }}
            style={{ width: 80, height: 80, borderRadius: 100 }}
          />
          <TouchableOpacity
          onPress={pickImage}
          >
            <Text
            style={{
              color: "#3493D9",
            }}
          >
            Change profile picture
          </Text>
          </TouchableOpacity>
          
        </View>
        <View style={{ padding: 10 }}>
          <View>
            <Text
              style={{
                opacity: 0.5,
              }}
            >
              Username
            </Text>
            <TextInput
              placeholder="Username"
              onChangeText={(newText) => setUserName(newText)}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#FEFEE2",
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text
              style={{
                opacity: 0.5,
              }}
            >
              Email
            </Text>
            <TextInput
              placeholder="Email"
              onChangeText={(newText) => setEmail(newText)}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#FEFEE2",
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text
              style={{
                opacity: 0.5,
              }}
            >
              Job
            </Text>
            <TextInput
              placeholder="Job"
              onChangeText={(newText) => setJob(newText)}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#FEFEE2",
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text
              style={{
                opacity: 0.5,
              }}
            >
              Phone
            </Text>
            <TextInput
              placeholder="Phone"
              onChangeText={(newText) => setPhone(newText)}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#FEFEE2",
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text
              style={{
                opacity: 0.5,
              }}
            >
              speciality
            </Text>
            <TextInput
              placeholder="speciality"
              onChangeText={(newText) => setDomain(newText)}
              defaultValue={form.domain}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#FEFEE2",
              }}
            />
          </View>
        </View>
        <View></View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;
