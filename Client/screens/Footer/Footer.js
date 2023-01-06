import React from 'react'
import { View , Text  , StyleSheet , ImageBackground, Button} from 'react-native'
const Footer = () => {
  return (
    <View style={styles.root}>
   <Text style={styles.arrow}>Footer</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  
  root: { 
    
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 80,
    backgroundColor: "#fb5b5a",
    marginTop: 735,
  }, 
  arrow: {
    fontSize: 20,
    height: 20,
    textAlignVertical: 'center',
    fontWeight: '900',
    color: '#fff',
  },
    loginText: { 
      padding: 5,
    }, 
})
export default Footer