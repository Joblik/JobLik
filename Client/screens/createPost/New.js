import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView, ImageBackground,Button } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Theme from '../../components/theme.css'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "../../api/client";
import { Card } from "react-native-elements";




const Post = ({navigation}) => {
    const [userId, setUserId] = useState(null);  
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
   const [adress, setAddress] = useState("");
   const [clicked, setClicked] = useState(false);
    useEffect(() => {
      async function getUserId() {
        const id = await AsyncStorage.getItem("id"); 
        setUserId(JSON.parse(id));  
      }
      getUserId();
      
    }, []);
  
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
     
      try {
        const response = await client.post(
          "/post/addPost",
          {
            description: description,
            adress: adress,
            userId: userId, // use the userId state variable here
            title: title,
        
          }
        );
        console.log(response.data);
        navigation.navigate("home");
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <View style={[Theme.mainScreen, Theme.whiteBack, Theme.p20]}>
        <View style={[Theme.flex1, Theme.flxDirectionRow, style.bottomBorder]}>
          <View style={[Theme.justifyCenter, Theme.pl10]}>
            <TouchableOpacity onPress={() => navigation.navigate("home")}>
              <Icon name="close" color="red" size={27} />
            </TouchableOpacity>
          </View>
          <View style={[Theme.justifyCenter, Theme.pl10]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={[Theme.f20, Theme.fontBold, Theme.txtDanger]}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              Theme.flex1,
              Theme.justifyCenter,
              Theme.alignEnd,
              Theme.pr30,
            ]}
          >
            <TouchableOpacity onPress={handleSubmit}>
              <Text style={[Theme.f17, Theme.fontBold, { color: "#00FF00" }]}>
                Post
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[Theme.flex1, Theme.flxDirectionRow, Theme.p10]}>
          <View></View>
          <View style={[Theme.justifyCenter, Theme.pl10, Theme.justifyEnd]}>
            <View></View>
          </View>
        </View>
        <View style={[Theme.flex8]}>
          <View style={[Theme.flex8]}>
            <Text
              style={[Theme.f35, Theme.mb20, Theme.ml60, { color: "#0274b3" }]}
            >
              New Job Offer
            </Text>
            <Card style={[Theme.p10, Theme.pt20 ]}>
              <ScrollView style={[Theme.p10]}>
                <TextInput
                  onChangeText={(e) => setTitle(e)}
                  multiline
                  style={[Theme.f35, Theme.flex4, Theme.p10, Theme.mb20]}
                  placeholder={"Title"}
                />

                <TextInput
                  onChangeText={(e) => setDescription(e)}
                  multiline
                  style={[Theme.f15, Theme.flex4, Theme.pb20, Theme.mb20]}
                  placeholder={"Write down your description here..."}
                />

                <TextInput
                  onChangeText={(e) => setAddress(e)}
                  multiline
                  style={[Theme.f15, Theme.flex4, Theme.pb20, Theme.mb20]}
                  placeholder={"Write down your Adress here..."}
                />
              </ScrollView>
            </Card>
          </View>
        </View>
        <View
          style={[Theme.flex1, Theme.pl10, Theme.justifyEnd, Theme.pb10]}
        ></View>
      </View>
    );
}

const style = StyleSheet.create({
    bottomBorder: {
        borderBottomColor: "#0084ff",
        borderBottomWidth: 1
    },
    shareBtn: {
        borderColor: "#0084ff",
        borderWidth: 1,
        padding: 5
    },
});

export default Post;
