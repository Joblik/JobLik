import React,{useState,useEffect} from 'react';
import {View, Text, TouchableOpacity,StyleSheet,TextInput,ScrollView,Image,ImageBackground} from 'react-native';
import client from '../../api/client';
import Theme from "../../utils/Theme";
import Icon from "react-native-vector-icons/FontAwesome";
import { color } from 'react-native-elements/dist/helpers';
const cover = { uri: "https://wallpaper.dog/large/5477484.jpg" };

const User = ({route,navigation}) => {
const  userPost = route.params;
console.log(userPost)
const [oneUser, setOneUser]=useState()
const [userId, setUserId] = useState([]);
    useEffect(() => {
      const user = userPost.userPost; 
 setOneUser(user)
 console.log(oneUser,"hhhhh")
      const fetchUser = async () => {
        try {
          const response = await client.get(`/user/${oneUser}`);
          const user = response.data;
          setUserId(user);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchUser();
    }, [userId]);
  
       console.log(userId.username);
      
    return (
      <View style={[Theme.mainScreen, Theme.whiteBack, { marginTop: 30 }]}>
      <View style={[{ height: 80 }, Theme.flxDirectionRow]}>
        <View style={[Theme.flex1, Theme.center, Theme.mr20]}>
          <TouchableOpacity>
            <Icon
              name="long-arrow-left"
              size={20}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={[Theme.flex3, Theme.center, Theme.flxDirectionRow]}>
          <Icon name="search" size={20} />
          <TextInput value="" style={[Theme.whiteBack, Theme.w100]} />
          <View style={[Theme.flex4]}></View>
        </View>
        <View style={[Theme.flex1, Theme.ml20, Theme.center]}>
          <TouchableOpacity>
            <Icon name="cog" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[Theme.flex8]}>
        <ScrollView>
          <View>
            <ImageBackground
              style={[
                Theme.w100,
                Theme.bgDark,
                Theme.pl20,
                style.imgBackground,
              ]}
              source={cover}
              resizeMode="cover"
            ></ImageBackground>
            <Image
              style={[
                {
                  borderColor: "#ecf0f1",
                  borderWidth: 2,
                  borderRadius: 50,
                  height: 100,
                  width: 100,
                  marginBottom: -70,
                  marginTop: -20,
                },
              ]}
              source={{
                uri: "https://scontent.ftun5-1.fna.fbcdn.net/v/t39.30808-6/301572632_619322496221354_8359942737408873830_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VQ5aMWHw95MAX8IoF7U&_nc_ht=scontent.ftun5-1.fna&oh=00_AfDgQqUjSqAOtA7Rr7NpjxbtOOtZclCyVHpIBHv9L2kCmQ&oe=63C2D1C1",
              }}
              size={120}
            />
           
          </View>
          
          <View style={[Theme.p10]}>
            <View>
              <Text
                style={[Theme.f25, Theme.fontSemiBold, Theme.txtDark]}
              ></Text>
              <Text style={[Theme.f15, Theme.txtDark]}></Text>
            </View>
            <View>
              <Text style={[Theme.mt10, style.txtTalk]}>
                <Text style={[Theme.mr50]}></Text>
              </Text>
            </View>

            <View style={[Theme.flxDirectionRow, Theme.mt20]}>
              <View
                style={[
                  Theme.flex5,
                  Theme.flxDirectionRow,
                  Theme.alignItemsCenter,
                ]}
              >
              
              </View>
            </View>
            <View>
            <Text >{userId.username}</Text>
            </View>
            <TouchableOpacity
                      
                      onPress={() => navigation.navigate('posts')}>
                      <Text>Posts</Text>
                  </TouchableOpacity>
            <TouchableOpacity
                      
                        onPress={() => navigation.navigate('Followers')}>
                        <Text>Followers</Text>
                    </TouchableOpacity>
                    <TouchableOpacity

                        onPress={() => navigation.navigate('followings')}>
                        <Text >Following</Text>
                    </TouchableOpacity>
          </View>
          <View style={[style.bgSection, Theme.pt20, Theme.p10]}>
            <View
              style={[Theme.p10, Theme.mt10, Theme.whiteBack, Theme.radius10]}
            >
              
              <View>
                <View style={[Theme.flxDirectionRow, Theme.jstfyBetween]}>
                  <Text
                    style={[
                      Theme.fontBold,
                      Theme.txtDark,
                      Theme.mb10,
                      Theme.f17,
                    ]}
                  >
                    Job
                  </Text>
                  
                </View>
                <Text style={[Theme.txtSemiDark,Theme.fontSemiBold]}>{userId.job}</Text>

                <View
                  style={[
                    Theme.flxDirectionRow,
                    Theme.mt10,
                    style.hrLine,
                    Theme.pb20,
                    Theme.pt10,
                  ]}
                >
                  <View style={[Theme.flex1, Theme.mr10]}>
                    <Icon
                      color={"#2c3e50"}
                      style={[style.mr4, style.ml4]}
                      name="briefcase"
                      size={30}
                    />
                  </View>
                  <View style={[Theme.flex6, Theme.justifyCenter]}>
                    <Text
                      style={[Theme.txtSemiDark, Theme.fontSemiBold]}
                    ></Text>
                  </View>
                </View>
              </View>
            </View>

            <View
              style={[Theme.p10, Theme.mt10, Theme.whiteBack, Theme.radius10]}
            >
              <View>
                <View style={[Theme.flxDirectionRow, Theme.jstfyBetween]}>
                  <Text
                    style={[
                      Theme.fontBold,
                      Theme.txtDark,
                      Theme.mb10,
                      Theme.f17,
                    ]}
                  >
                    Contacts
                  </Text>
                </View>
                <View
                  style={[
                    Theme.flxDirectionRow,
                    Theme.mt10,
                    style.hrLine,
                    Theme.pb20,
                    Theme.pt10,
                  ]}
                >
                  <View style={[Theme.flex1, Theme.center, Theme.mr10]}>
                    <Icon
                      color={"#2c3e50"}
                      style={[style.mr4, style.ml4]}
                      name="phone"
                      size={30}
                    />
                  </View>
                  <View style={[Theme.flex6, Theme.justifyCenter]}>
                    <Text
                      style={[Theme.f15, Theme.fontBold, Theme.txtSemiDark]}
                    >
                      Phone
                    </Text>
                    <Text style={[Theme.txtSemiDark,Theme.fontSemiBold]}>{userId.phone}</Text>
                  </View>
                </View>
                <View
                  style={[
                    Theme.flxDirectionRow,
                    Theme.mt10,
                    style.hrLine,
                    Theme.pb20,
                    Theme.pt10,
                  ]}
                >
                  <View style={[Theme.flex1, Theme.center, Theme.mr10]}>
                    <Icon
                      color={"#2c3e50"}
                      style={[style.mr4, style.ml4]}
                      name="envelope-o"
                      size={30}
                    />
                  </View>
                  <View style={[Theme.flex6, Theme.justifyCenter]}>
                    <Text
                      style={[Theme.f15, Theme.fontBold, Theme.txtSemiDark]}
                    >
                      Email
                    </Text>
                    <Text style={[Theme.txtSemiDark,Theme.fontSemiBold, { marginBottom: 20 }]}>
                      {userId.email}
                    </Text>
                  </View>
                </View>
               
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  imgBackground: {
    height: 150,
    justifyContent: "center",
  },
  txtTalk: {
    lineHeight: 20,
  },
  mr4: {
    marginRight: 4,
  },
  ml4: {
    marginLeft: 4,
  },
  btnSection: {
    borderWidth: 1,
    borderColor: "#84817a",
  },
  ellipsis: {
    marginTop: 20,
    padding: 10,
    borderColor: "#596275",
    borderWidth: 1,
  },
  bgSection: {
    backgroundColor: "#e0d9d3",
  },
  hrLine: {
    borderBottomColor: "#95a5a6",
    borderBottomWidth: 1,
    borderStyle: "dotted",
  },
  statsButtonText:{
    color : "blue"
},
statsButton: {
  padding: 10,
  borderWidth: 1,
  borderColor: '#ddd',
  marginHorizontal: 10,
},
});
export default User;
