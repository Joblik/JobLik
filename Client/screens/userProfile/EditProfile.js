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
  const [domain, setDomain] = useState("");
  console.log("🚀 ~ file: EditProfile.js:10 ~ EditProfile ~ form=============>>", form);
const data  = {
  user,
  image,
  email,
  phone,
  job,
  domain,
}
   useEffect(() => {});
  const handleSubmit = async () => {
    try {
      const response = await client.put(`/user/UpdateOneUser/${form._id}`,data );
      console.log(response.data);
      console.log("🚀 ~ file: EditProfile.js:31 ~ handleSubmit ~ data ================>>>>" , data)
    } catch (error) {
      console.log(error);
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
              uri: "https://scontent.ftun2-2.fna.fbcdn.net/v/t1.6435-9/131895898_3099883176779586_137168566729464076_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=2RaMfz1EE2AAX-pOv4R&_nc_ht=scontent.ftun2-2.fna&oh=00_AfCIqBWslRpx7_Vw29LEaUDy5pb7JmVTBWaVYaGV625Q2A&oe=63F21798",
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
              defaultValue={form.username}
              onChangeText={(newText) => setUser(newText)}
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
              defaultValue={form.email}
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
              defaultValue={form.job}
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
              defaultValue={form.phone}
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
