import React from 'react'
import { View , Text , Image , StyleSheet , ImageBackground, Button} from 'react-native'
import Logo from '../../components/img/logo.png'
import Input from '../../components/Input'
const LoginScreen = () => {
  return (
    <View style={styles.root}>
    <Image source={Logo} style={styles.logo} /> 
    <Text style={styles.loginText}>Login</Text>
    <ImageBackground
        source={{
          uri: 
'https://res.cloudinary.com/dqmhtibfm/image/upload/v1672263786/JobLik_xxx8ao.png',
        }}
        style={styles.img}>
   <Text style={styles.loginText}>Email</Text>
    <Input /> 
    <Text style={styles.loginText}>Password</Text>
    <Input />
    <Button
          title="Login"
        />
    </ImageBackground>
    <Button
          title="connect with Google"
        />
    </View>
  )
}
const styles = StyleSheet.create({
  
  root: { 
    alignItems : 'center', 
    width : '100%',
    Height: '100%',
   
  }, 
  logo : { 
    width : '100%',
    Height: 50,  
    alignItems : 'center', 
   },
   img: {
    width: 290,
    height: 250,
    alignItems : 'center', 
    },
    loginText: { 
      padding: 5,
    }, 
    
    

})
export default LoginScreen