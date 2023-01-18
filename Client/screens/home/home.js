import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-elements";
import client from "../../api/client";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  // const { refresh } = useRefresh();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await client.get("/post/getAllPosts");
      setPosts(response.data);
      setFilteredPosts(response.data);
    }
    fetchPosts();
  }, []);
  // // console.log('posts:'+posts);

  return (
    <ScrollView
      style={{
        backgroundColor: "#F8F8F8",
        paddingHorizontal: 20,
      }}
    >
      <Text
        style={{
          color: "#0084ff",
          marginTop: 40,
          // fontFamily: "Bold",
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        JobLik
      </Text>

      <Text
        style={{
          // fontFamily: "ExtraBold",
          fontSize: 18,
          marginTop: 13,
          color: "rgb(14,49,65)",
        }}
      >
        Find your best jobs
      </Text>

      <View
        style={{
          backgroundColor: "#FFF",
          borderRadius: 5,
          padding: 5,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TextInput
          placeholder="What are you looking for?"
          placeholderTextColor="#B0B0B0"
          style={{
            // fontFamily: "Medium",
            paddingHorizontal: 20,
          }}
          onChangeText={(e) => {
            setFilteredPosts(
              posts.filter(
                (filteredPosts) =>
                  filteredPosts.description
                    .toLowerCase()
                    .includes(e.toLowerCase()) ||
                  filteredPosts.title.toLowerCase().includes(e.toLowerCase()) ||
                  filteredPosts.adress.toLowerCase().includes(e.toLowerCase())
              )
            );
            // console.log('filtered:'+filteredfilteredPostsosts +'/'+filteredPostsosts)
          }}
        />
        <View
          style={{
            backgroundColor: "#0084ff",
            width: 30,
            height: 30,
            borderRadius: 8,
            marginLeft: 80,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={require("../../components/images/searc.png")} />
        </View>
      </View>
      <Text
        style={{
          // fontFamily: "ExtraBold",
          marginTop: 20,
          fontSize: 15,
        }}
      >
        Full time job offer
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Card>
          <View>
            <Image
              source={require("../../components/images/fair.jpg")}
              style={{ width: 200, height: 200 }}
            />
          </View>
        </Card>
        <Card>
          <View>
            <Image
              source={require("../../components/images/job.jpg")}
              style={{ width: 200, height: 200 }}
            />
          </View>
        </Card>
        <Card>
          <View>
            <Image
              source={require("../../components/images/empl.jpeg")}
              style={{ width: 200, height: 200 }}
            />
          </View>
        </Card>
      </ScrollView>
      <Text
        style={{
          // fontFamily: "ExtraBold",
          marginVertical: 20,
          fontSize: 15,
          color: "rgb(14,49,65)",
        }}
      >
        Your Today Job
      </Text>

      {filteredPosts.map((post, user) => (
        <View
          key={post.UserId}
          style={{
            backgroundColor: post.status === "active" ? "#FFF" : "#DFDFDF",
            marginTop: 10,
            flexDirection: "row",
            borderRadius: 10,
            height: 130,
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#DFDFDF",
              borderRadius: 5,
              height: 40,
              width: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../components/img/logo.png")}
              style={{ width: 100, height: 100 }}
            />
          </View>

          <View
            style={{
              paddingHorizontal: 20,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("OnePost", { post: post, user: user })
              }
            >
              <Text
                style={{
                  // fontFamily: "ExtraBold",
                  fontSize: 13,
                  marginTop: 20,
                  marginLeft: 190,
                  color: "#0084ff",
                }}
              >
                Show Details
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                // fontFamily: "ExtraBold",
                fontSize: 13,
                marginTop: 20,
              }}
            >
              {post.title}
            </Text>

            <View
              style={{
                backgroundColor: post.status === "active" ? "#DFDFDF" : "#FFF",
                borderRadius: 5,
                width: 250,
                alignItems: "center",
                marginVertical: 5,
              }}
            >
              <Text
                style={{
                  // fontFamily: "Medium"
                  fontSize: 15,
                }}
              >
                {post.description.length > 60
                  ? `${post.description.substring(0, 60)}...`
                  : post.description}
              </Text>
            </View>
          </View>
          <Text
            style={{
              // fontFamily: "ExtraBold",
              fontSize: 10,
              marginLeft: 90,
              marginBottom: 100,
            }}
          >
            {post.adress}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Home;
