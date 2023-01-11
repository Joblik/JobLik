import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Image } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import Ionic from "react-native-vector-icons/Ionicons";
import client from "../../api/client";

const EditProfile = ({ navigation, route }) => {
  const [user, setUser] = useState(form.username);
  const [image, setImage] = useState(form.image);
  const [email, setEmail] = useState(form.email);
  const [phone, setPhone] = useState(form.phone);
  const [job, setJob] = useState(form.job);
  const [domain, setDomain] = useState(form.domain);
  const { form } = route.params;
  console.log("🚀 ~ file: EditProfile.js:10 ~ EditProfile ~ form", form);

  useEffect(() => {});
  const handleSubmit = async () => {
    try {
      const response = await client.put(`/Users/UpdateOneUser/${userId}`, data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
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
              onPress={handleSubmit}
            />
          </TouchableOpacity>
        </View>
        <View style={{ padding: 20, alignItems: "center" }}>
          <Image
            defaultSource={image}
            style={{ width: 80, height: 80, borderRadius: 100 }}
          />
          <Text
            style={{
              color: "#3493D9",
            }}
          >
            Change profile photo
          </Text>
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
              defaultValue={user}
              onChangeText={(newText) => setUser(newText)}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
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
              defaultValue={email}
              onChangeText={(newText) => setEmail(newText)}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
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
              defaultValue={job}
              onChangeText={(newText) => setJob(newText)}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
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
              defaultValue={phone}
              onChangeText={(newText) => setPhone(newText)}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
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
              defaultValue={domain}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#CDCDCD",
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
