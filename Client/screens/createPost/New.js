import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, ScrollView, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Theme from '../../components/theme.css'
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "../../api/client"



const Post = ({ navigation }) => {
    const [userId, setUserId] = useState(null);  

    useEffect(() => {
      async function getUserId() {
        const id = await AsyncStorage.getItem("id"); 
        setUserId(JSON.parse(id));  
      }
      getUserId();
      
    }, []);
  
    const [description, setDescription] = useState("");
    const adress  = {
        lgt : AsyncStorage.getItem('lgt'),
        lat : AsyncStorage.getItem('lat')
    }
    const [title, setTitle] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await client.post(
          "/Posts/addPost",
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
                    <Text style={[Theme.f35,Theme.mb20,Theme.ml20]}>New Job Offer</Text>
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
                        <Button
                        title={'Select Location'} 
                        onPress={
                            navigation.navigate('map')
                        }/>
                        <Text>Your Coords : {adress.lat+':'+adress.lgt}</Text>
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
