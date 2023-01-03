import React ,{ useEffect, useState } from 'react'
import { View , Text , Image , StyleSheet , ImageBackground, Button, TextInput} from 'react-native'
import Logo from '../../components/img/logo.png'
import Input from '../../components/Input'


const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Location, setLocation] = useState("");
    const [Reward, setReward] = useState("");
    
    const handleSubmit = () => {
        // create a form data object with the form values
        const formData = new FormData();
        formData.append('Title', title);
        formData.append('Description', description);
        formData.append('Adress', location);
        formData.append('reward', reward);
        formData.append('Uname', "r");
        formData.append('Uimage', "");
        // post the form data to the server using the fetch API
        fetch('http://localhost:8080/user/addPost', {
          method: 'POST',
          body: formData
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error(error);
          });
      };



    return (
        <View>
            <Text style={styles.title}>New Post</Text>
            <ImageBackground
        source={{
          uri: 
'https://res.cloudinary.com/dqmhtibfm/image/upload/v1672263786/JobLik_xxx8ao.png',
        }}
        style={styles.img}>
            <Text style={styles.base}>Title</Text>
            <TextInput placeholder='Insert Title' style={styles.inpt}     onChangeText={setTitle}
        value={title}/>
            <Text style={styles.base}>Description</Text>
            <TextInput placeholder='Insert Description' style={styles.inpt} onChangeText={setDescription}
        value={Description}/>
            <Text style={styles.base}>Location</Text>
            <TextInput placeholder='Insert Location' style={styles.inpt} onChangeText={setLocation}
        value={Location}/>
            <Text style={styles.base}>Reward </Text>
            <TextInput placeholder='Insert Reward' style={styles.inpt} onChangeText={setReward}
        value={Reward}/>
            <Button color="#000000" title='Post' onPress={handleSubmit}></Button>
        </ImageBackground>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
  
    title: { 
      fontSize: 40,
      color: 'black',
      textAlign: 'center',
      marginBottom: 20
    },
    desc: {
        fontSize: 10,
        color: 'white'
    },
    img: {
     width: 290,
    height: 450,
    alignItems : 'center',
    overflow: 'hidden',
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 0.5
    },
    inbtn: {
        color: 'black'
    },
    base:{
        color: '#ffffff',
        textShadowColor: 'black',
        textShadowRadius: 5
    },
    inpt: {
        backgroundColor: "white",
        width: 150,
        height: 50,
        marginBottom: 20,
        marginTop: 10,
        textAlign: 'center',
        borderRadius: 20
    }
  })

export default CreatePost;