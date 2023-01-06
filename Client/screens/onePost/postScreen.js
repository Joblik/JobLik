import React from 'react'
import { View , Text , Image , StyleSheet , ImageBackground, Button} from 'react-native'
import Logo from '../../components/img/logo.png'
import Input from '../../components/Input'
import Footer from '../Footer'


const PostScreen = (props) => {
    console.log(props)
    return (
        <View>
            <ImageBackground
        source={{
          uri: 
'https://res.cloudinary.com/dqmhtibfm/image/upload/v1672263786/JobLik_xxx8ao.png',
        }}
        style={styles.img}>
            <Text style={styles.title}>{props.data.title}</Text>
            <Text style={styles.desc}>{props.data.desc}</Text>
            <Text style={styles.base}>Located : {props.data.loc}</Text>
            <Text style={styles.base}>Reward : {props.data.reward}</Text>
            <Text style={styles.base}>Recruiter : {props.data.recruiter}</Text>
            <Button color="#000000" title='Apply'></Button>
        </ImageBackground>
            
            <Footer /> 
        </View>
    )
}

const styles = StyleSheet.create({
  
    title: { 
      fontSize: 40,
      color: 'white'
    },
    desc: {
        fontSize: 10,
        color: 'white'
    },
    img: {
     width: 290,
    height: 250,
    alignItems : 'center'
    },
    inbtn: {
        color: 'black'
    },
    base:{
        color: '#ffffff'
    }
  })

export default PostScreen;