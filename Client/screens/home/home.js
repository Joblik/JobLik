import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import GlobalStyles from "./globalStyles";
import One from "./OnePost"

const Home = () => {
  const [rectangleDropdownOpen, setRectangleDropdownOpen] = useState(false);
  const [rectangleDropdownValue, setRectangleDropdownValue] = useState("");
  const [rectangleDropdownItems, setRectangleDropdownItems] = useState([
    { value: "place", label: "place" },
    { value: "price", label: "price" },
  ]);



  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homeChildLayout3]} />
    
      <Image
        style={[styles.homeInner, styles.homeLayout]}
        resizeMode="cover"
        source={require("./ellipse-2.png")}
      />

      <RNPTextInput
        style={styles.rectangleRnptextinput}
        placeholder="search"
        label="Search"
        mode="flat"
        theme={{ colors: { background: "#d9d9d9" } }}
      />
      <One/>
      
    
      
     
    
     
     
     
     
      <Text style={[styles.joblik, styles.usernameTypo1]}>joblik</Text>
    
         <View style={styles.wrapper}>
        <DropDownPicker
          style={styles.dropdownpicker}
          open={rectangleDropdownOpen}
          setOpen={setRectangleDropdownOpen}
          value={rectangleDropdownValue}
          setValue={setRectangleDropdownValue}
          placeholder="filter"
          items={rectangleDropdownItems}
          dropDownContainerStyle={styles.rectangleDropdowndropDownContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleDropdowndropDownContainer: {
    backgroundColor: "#d9d9d9",
  },
  homeChildLayout3: {
    width: 421,
    position: "absolute",
  },
  homeLayout: {
    height: 24,
    width: 21,
    position: "absolute",
  },
  homeChildLayout2: {
    height: 100,
    width: 381,
    borderRadius: GlobalStyles.Border.br_md,
    position: "absolute",
  },
  homeChild3Position: {
    left: 6,
    width: 381,
  },
  usernameTypo2: {
    color: GlobalStyles.Color.white,
    fontSize: GlobalStyles.FontSize.size_base,
    left: 50,
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.inter,
  },
  usernamePosition: {
    top: 155,
    position: "absolute",
  },
  titleTypo1: {
    left: 55,
    textAlign: "left",
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.inter,
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  homeChildLayout1: {
    width: 18,
    backgroundColor: GlobalStyles.Color.orange,
    top: 212,
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    width: 27,
    left: 13,
    height: 34,
  },
  homeChildLayout: {
    left: 4,
    height: 100,
    width: 381,
    borderRadius: GlobalStyles.Border.br_md,
    position: "absolute",
  },
  iconPosition1: {
    left: 29,
    width: 27,
    height: 34,
    position: "absolute",
  },
  usernameTypo1: {
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.inter,
  },
  usernameTypo: {
    left: 66,
    textAlign: "left",
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.inter,
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  titleTypo: {
    left: 71,
    textAlign: "left",
    color: GlobalStyles.Color.white,
    fontFamily: GlobalStyles.FontFamily.inter,
    fontSize: GlobalStyles.FontSize.size_base,
    position: "absolute",
  },
  homeChildPosition3: {
    top: 342,
    width: 18,
    backgroundColor: GlobalStyles.Color.orange,
    height: 24,
    position: "absolute",
  },
  homeChildPosition2: {
    top: 463,
    width: 18,
    backgroundColor: GlobalStyles.Color.orange,
    height: 24,
    position: "absolute",
  },
  homeChildPosition1: {
    top: 589,
    width: 18,
    backgroundColor: GlobalStyles.Color.orange,
    height: 24,
    position: "absolute",
  },
  homeChildPosition: {
    top: 706,
    width: 18,
    backgroundColor: GlobalStyles.Color.orange,
    height: 24,
    position: "absolute",
  },
  lineViewLayout: {
    height: 70,
    width: 1,
    borderRightWidth: 1,
    top: 875,
    position: "absolute",
    borderColor: "#000",
    borderStyle: "solid",
  },
  iconPosition: {
    width: 59,
    top: 874,
    position: "absolute",
  },
  homeChild: {
    top: -98,
    left: 481,
    backgroundColor: "#6048f0",
    height: 61,
  },
  homeItem: {
    top: 21,
    left: 392,
  },
  homeInner: {
    top: 48,
    left: 324,
  },
  rectangleRnptextinput: {
    top: 94,
    left: 117,
    width: 145,
    height: 21,
    backgroundColor: GlobalStyles.Color.gray_100,
    position: "absolute",
  },
  dropdownpicker: {
    backgroundColor: GlobalStyles.Color.gray_100,
  },
  wrapper: {
    top: 755,
    left: 82,
    borderRadius: 12,
    width: 216,
    height: 34,
    position: "absolute",
  },
  rectangleIcon: {
    top: 146,
  },
  title: {
    top: 172,
  },
  description: {
    top: 189,
  },
  starView: {
    left: 338,
  },
  homeChild1: {
    left: 376,
  },
  homeChild2: {
    left: 356,
  },
  homeChild3: {
    top: 274,
  },
  username1Position: {
    top: 283,
    position: "absolute",
  },
  homeChild4: {
    top: 398,
  },
  homeChild5: {
    top: 516,
    left: 2,
  },
  homeChild6: {
    top: 637,
  },
  username2Position: {
    top: 411,
    position: "absolute",
  },
  image8Icon: {
    top: 534,
  },
  image9Icon: {
    top: 654,
  },
  username3: {
    top: 532,
  },
  username4: {
    top: 654,
  },
  title1: {
    top: 299,
  },
  title2: {
    top: 427,
  },
  title3: {
    top: 548,
  },
  title4: {
    top: 670,
  },
  description1: {
    top: 314,
  },
  description2: {
    top: 451,
  },
  description3: {
    top: 563,
  },
  description4: {
    top: 688,
  },
  homeChild7: {
    left: 376,
  },
  homeChild8: {
    left: 356,
  },
  homeChild9: {
    left: 338,
  },
  homeChild10: {
    left: 356,
  },
  homeChild11: {
    left: 376,
  },
  homeChild12: {
    left: 338,
  },
  homeChild13: {
    left: 356,
  },
  homeChild14: {
    left: 376,
  },
  homeChild15: {
    left: 338,
  },
  homeChild16: {
    left: 356,
  },
  homeChild17: {
    left: 338,
  },
  homeChild18: {
    left: 376,
  },
  homeChild19: {
    top: 868,
    left: 0,
    height: 69,
  },
  lineView: {
    left: 132,
  },
  homeChild20: {
    left: 289,
  },
  image21Icon: {
    left: 178,
    width: 64,
    height: 57,
    top: 874,
    position: "absolute",
  },
  image22Icon: {
    height: 56,
    left: 324,
  },
  image23Icon: {
    left: 35,
    height: 62,
  },
  joblik: {
    top: 40,
    left: 8,
    fontSize: 32,
    letterSpacing: 3.2,
    color: "#1a3e4f",
    textAlign: "left",
    fontFamily: GlobalStyles.FontFamily.inter,
    position: "absolute",
  },
  homeChild21: {
    top: 149,
    left: 475,
    width: 326,
    height: 369,
    borderRadius: GlobalStyles.Border.br_md,
    position: "absolute",
  },
  home: {
    backgroundColor: GlobalStyles.Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderWidth: 1,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderColor: "#000",
    borderStyle: "solid",
  },
});

export default Home;
