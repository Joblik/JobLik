import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Theme from '../../components/theme.css'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';




const Post = ({ navigation }) => {
    const [userId, setUserId] = useState(null);  // create a state variable for the user's _id

    useEffect(() => {
      async function getUserId() {
        const id = await AsyncStorage.getItem("id");  // retrieve the user's _id from AsyncStorage
        setUserId(JSON.parse(id));  // update the state variable with the user's _id
      }
      getUserId();
      console.log("hyhy");
    }, []);
  
    const [description, setDescription] = useState("");
    const [adress, setAdress] = useState("");
    const [title, setTitle] = useState("");
    const [img, setImg] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://192.168.103.7:8080/Posts/addPost",
          {
            description: description,
            adress: adress,
            userId: userId, // use the userId state variable here
            title: title,
            img: img,
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
                    <TouchableOpacity
                        onPressOut={()=>navigation.navigate("home")}
                    >
                        <Icon name="close" color="#2c3e50" size={27} />
                    </TouchableOpacity>
                </View>
                <View style={[Theme.justifyCenter, Theme.pl10]}>
                    <Text style={[Theme.f20, Theme.fontBold, Theme.txtDark]}>Share Post</Text>
                </View>
                <View style={[Theme.flex1, Theme.justifyCenter, Theme.alignEnd, Theme.pr30]}>
                    <TouchableOpacity
                       onPress={
                        handleSubmit
                    }
                       
                    >
                        <Text style={[Theme.f17, Theme.fontBold, { color: "red" }]}>Post</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[Theme.flex1, Theme.flxDirectionRow, Theme.p10]}>
                <View>
                </View>
                <View style={[Theme.justifyCenter, Theme.pl10, Theme.justifyEnd]}>
                    <View>
                    </View>
                </View>
            </View>
            <View style={[Theme.flex8]}>
                <View style={[Theme.flex8]}>
                <ScrollView style={[Theme.p10,]}>
                        <TextInput
                            onChangeText={e => setTitle(e)}
                            multiline style={[Theme.f35, Theme.flex4, Theme.p10]} placeholder={"Title"} />
                    </ScrollView>
                    <ScrollView style={[Theme.p10, Theme.pt20,]}>
                        <TextInput
                            onChangeText={e => setDescription(e)}
                            multiline style={[Theme.f15, Theme.flex4, Theme.pb20]} placeholder={"Write down your description here..."} />
                    </ScrollView>
                    <ScrollView style={[Theme.p10, Theme.pt20,]}>
                        <TextInput
                            onChangeText={e => setAdress(e)}
                            multiline style={[Theme.f15, Theme.flex5, Theme.pb20]} placeholder={"Write down your address here..."} />
                    </ScrollView>
                    <ScrollView style={[Theme.p10, Theme.pt20,]}>
                        <TextInput
                            onChangeText={e => setImg(e)}
                            multiline style={[Theme.f15, Theme.flex5, Theme.pb20]} placeholder={"Image Link, if you want to add one"} />
                    </ScrollView>
                </View>
                <View style={[Theme.flex3]}>
                    <ScrollView style={[Theme.p10, Theme.pt20, Theme.flex5]}>
                        <ImageBackground
                            style={[Theme.w100, { height: 400 }]}
                            
                        ></ImageBackground>
                    </ScrollView>
                </View>
            </View>
            <View style={[Theme.flex1, Theme.pl10, Theme.justifyEnd, Theme.pb10]}>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    bottomBorder: {
        borderBottomColor: "#bdc3c7",
        borderBottomWidth: 1
    },
    shareBtn: {
        borderColor: "#bdc3c7",
        borderWidth: 1,
        padding: 5
    },
});

export default Post;