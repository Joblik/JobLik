import React, { useState } from "react";
import { View, Text, StyleSheet, Button,Image,Animated , TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PagerView from "react-native-pager-view";

const BackgroundImage = ({ source }) => {
    return (
        <Image source={source} style={styles.backgroundImage} />
    );
};




const WelcomePage = () => {
  const [currentView, setCurrentView] = useState(0);
  const navigation = useNavigation();
  const [animationValue] = useState(new Animated.Value(1));
  const handleViewChange = (index) => {
    setCurrentView(index);
  };

  const handleButtonPress = () => {
    Animated.timing(animationValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    navigation.navigate("register");
  };
 
  return (
    <View style={styles.container}>
      <PagerView
        style={styles.viewPager}
        onPageScroll={(event) => {
          const position = event.position;
          setCurrentView(position);
        }}
      >
        
        <View style={styles.view}>
       <BackgroundImage  source={require('../../components/welcome/1.png')}/>
          <Text style={styles.text1}>Be respectful to each other</Text>
          <Text style={styles.text}>
            Always be kind and respectful when communicating with others on the
            platform. Profanities, obscenities, discrimination of any form will
            not be tolerated on our platform.
          </Text>
        </View>
{/* <Image/> */}
        <View style={styles.view}>
        <BackgroundImage  source={require('../../components/welcome/2.png')}/>
          <Text style={styles.text1}>Safety and Security</Text>
          <Text style={styles.text}>
            Outside only allows for legal and appropriate gigs to be reflected
            on our platform, any posting that is considered unlawful or
            inappropriate will be taken down without notice, and any necessary
            follow-up action may be taken.
          </Text>
        </View>

        <View style={styles.view}>
        <BackgroundImage  source={require('../../components/welcome/3.png')}/>
          <Text style={styles.text1}>Be Understanding</Text>
          <Text style={styles.text2}>
            Unforeseen circumstances can arise at any time, for anyone. Such
            instances could result in delays or mistakes that affect the job
            progress and completion. Let’s try our best to be empathetic and
            understanding where we can, and offer our patience, understanding,
            and help to other users and clients from the community.
          </Text>
          <TouchableOpacity 
  style={styles.button}
  onPress={handleButtonPress}
>
  <Text style={styles.buttonText}>I Agree</Text>
</TouchableOpacity>
        </View>
        
      </PagerView>
      <View style={styles.bulletContainer}>
        <View
          style={
            currentView === 0 ? styles.activeBullet : styles.inactiveBullet
          }
        />
        <View
          style={
            currentView === 1 ? styles.activeBullet : styles.inactiveBullet
          }
        />
        <View
          style={
            currentView === 2 ? styles.activeBullet : styles.inactiveBullet
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  viewPager: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 17,
    color: "black",
    position: 'absolute',
    bottom: 80,
    alignSelf: 'flex-end',
    marginLeft:5,
    marginRight:10
  },
  text2: {
    fontSize: 16,
    color: "black",
    position: 'absolute',
    bottom: 80,
    alignSelf: 'flex-end',
    marginLeft:5,
    marginRight:10,
    marginTop:80
  },
  button: {
    backgroundColor: '#0084ff',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    margin: 10,
    width: 200,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },
  text1: {
    fontSize: 20,
    marginBottom:190,
    color:"black",
    justifyContent: "center",
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  bulletContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "white",
  },
  activeBullet: {
    backgroundColor: "black",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
    marginBottom: 50,
  },
  inactiveBullet: {
    backgroundColor: "#D3D3D3",
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
    marginBottom: 50,
  },
  backgroundImage: {
    position: 'relative',
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%',
    height: '50%',
    marginBottom: 50,
},
});

export default WelcomePage;
