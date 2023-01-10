import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Text,
  StyleSheet,
} from "react-native";
import Theme from "../../utils/theme.style";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput } from "react-native-paper";


const cover = { uri: "https://wallpaper.dog/large/5477484.jpg" };

const EditProfile = ({ navigation }) => {
 handleSubmit
   
  return (
    <View style={[Theme.mainScreen, Theme.whiteBack, { marginTop: 30 }]}>
      <View style={[{ height: 80 }, Theme.flxDirectionRow]}>
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
                Theme.bgDanger,
                Theme.pl20,
                style.imgBackground,
              ]}
              source={form.image}
              resizeMode="cover"
            ></ImageBackground>
          </View>
          <View style={[Theme.p10]}>
            <View>
              <Text
                style={[Theme.f25, Theme.fontSemiBold, Theme.txtDark]}
              ></Text>
              <Text style={[Theme.f15, Theme.txtDark]}></Text>
            </View>

            <View style={[Theme.flxDirectionRow, Theme.mt20]}>
              <View
                style={[
                  Theme.flex5,
                  Theme.flxDirectionRow,
                  Theme.alignItemsCenter,
                ]}
              >
                <Text style={[Theme.fontBold, Theme.linkedInFontColor]}>
                  1590 Followers
                </Text>
                <Icon
                  color={"#596275"}
                  style={[style.mr4, style.ml4]}
                  name="circle"
                  size={3}
                />
                <Text style={[Theme.fontBold, Theme.linkedInFontColor]}>
                  500+ connections
                </Text>
              </View>
            </View>

            <View style={[Theme.mt20, style.bgSection, Theme.p20]}>
              <View>
                <Text style={[Theme.fontBold, Theme.txtDark, Theme.f15]}>
                  Skills
                </Text>
              </View>
              <View style={[Theme.mt20]}>
                <Text style={[Theme.txtSemiDark]}></Text>
              </View>
            </View>
          </View>
          <View style={[style.bgSection, Theme.pt20, Theme.p10]}>
            <View style={[Theme.p10, Theme.whiteBack, Theme.radius10]}>
              <View>
                <Text
                  style={[Theme.fontBold, Theme.txtDark, Theme.mb10, Theme.f17]}
                >
                  About
                </Text>
                <Text style={[style.txtTalk, Theme.txtSemiDark]}>about me</Text>
                <View
                  style={[
                    Theme.mt10,
                    { justifyContent: "flex-end" },
                    Theme.flxDirectionRow,
                  ]}
                ></View>
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
                    Job
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
                    <TextInput
                      style={[Theme.fontSemiBold]}
                      defaultValue={phone}
                      onChange={handleChange}
                    >
                     
                    </TextInput>
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
                    <TextInput
                      style={[Theme.fontSemiBold, { marginBottom: 20 }]}
                      defaultValue={email}
                      onChange={handleChange}
                    ></TextInput>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[Theme.flxDirectionRow]}>
            <TouchableOpacity
              style={[Theme.btnM50, Theme.mr10, Theme.linkedinBack]}
              onPress={() => navigation.navigate("EditProfile")}
            >
              <Text style={[Theme.whiteFont, Theme.fontBold, Theme.f15]}>
                Submit
              </Text>
            </TouchableOpacity>
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
});

export default EditProfile;
