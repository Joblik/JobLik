import React from 'react'
import { View , Text , Image , StyleSheet , ImageBackground, Button, TextInput} from 'react-native'
import Logo from '../../components/img/logo.png'
const Register = () => {
  return (
    <View style={styles.view}>
        <Image source={Logo} style={styles.logo} /> 
    <Text style={styles.title}>Register</Text>
    <ImageBackground
source={{
  uri: 
'https://res.cloudinary.com/dqmhtibfm/image/upload/v1672263786/JobLik_xxx8ao.png',
}}
style={styles.img}>
    <Text style={styles.base}>Name</Text>
    <TextInput placeholder='Insert Name' style={styles.inpt}/>
    <Text style={styles.base}>Email</Text>
    <TextInput placeholder='Insert Email' style={styles.inpt}/>
    <Text style={styles.base}>Password</Text>
    <TextInput placeholder='Insert Password' style={styles.inpt}/>
    <Text style={styles.base}>Confirm Password </Text>
    <TextInput placeholder='Password Confirmation' style={styles.inpt}/>
    <Button color="#000000" title='Register Now'></Button>
</ImageBackground>
    
    
</View>
  )
}
const styles = StyleSheet.create({

    view:{
        alignItems:'center',
        paddingBottom:"10%"
    },
    logo : { 
        flex: 1,
    width: 300,
    height: 50,
    resizeMode: "contain",
       },
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
          textShadowRadius: 5,
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
export default Register