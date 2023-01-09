import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Footer from "../Footer/Footer"


const ProfileScreen = ({ route, navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [domain, seDomain] = useState("");
  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        `http://192.168.104.22:8080/users/${userId}`
      );
      const user = response.data;
      setUsername(user.username);
      setEmail(user.email);
      setPassword(user.password);
      setImage(user.image);
      setPhone(user.phone);
      setJob(user.job);
      seDomain(user.domain);
    }
    fetchUser();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={{
            uri: "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Free-Download.png",
          }}
          style={styles.userImg}
        />
        <Text style={styles.userName}>{username}</Text>
        <Text style={styles.aboutUser}>
          {job} at {domain}
        </Text>
        <View style={styles.userBtnWrapper}>
          
            <>
              <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                <Text style={styles.userBtnTxt}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userBtn} onPress={() => {}}>
                <Text style={styles.userBtnTxt}>Follow</Text>
              </TouchableOpacity>
            </>
          
            <>
              <TouchableOpacity style={styles.userBtn}>
                <Text
                  style={styles.userBtnTxt}
                  onPress={() => navigation.navigate("EditProfile")}
                >
                  Edit
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.userBtn}>
                <Text style={styles.userBtnTxt}>Logout</Text>
              </TouchableOpacity>
            </>
        
        </View>

        <View style={styles.userInfoWrapper}>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>Posts</Text>
            <Text style={styles.userInfoSubTitle}>Posts</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>10,000</Text>
            <Text style={styles.userInfoSubTitle}>Followers</Text>
          </View>
          <View style={styles.userInfoItem}>
            <Text style={styles.userInfoTitle}>100</Text>
            <Text style={styles.userInfoSubTitle}>Following</Text>
          </View>
        </View>
      <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginTop: 40,
    marginBottom: -50,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
  userBtn: {
    borderColor: "#000000",
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: "#003f5c",
  },
  userInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: "center",
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
});
