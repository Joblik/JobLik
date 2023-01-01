import React from 'react'
import { View , Text  , StyleSheet , ImageBackground, Button} from 'react-native'
const Footer = () => {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={{
          uri: 
'https://res.cloudinary.com/dqmhtibfm/image/upload/v1672263786/JobLik_xxx8ao.png',
        }}
        style={styles.img}>
   <Text style={styles.arrow}>Footer</Text>
   </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  
  root: { 
    
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 80,
  }, 
  arrow: {
    fontSize: 20,
    height: 20,
    textAlignVertical: 'center',
    fontWeight: '900',
    color: '#fff',
  },
  img: {
    width: 400,
    height: 80,
    alignItems : 'center', 
    },
    loginText: { 
      padding: 5,
    }, 
})
export default Footer