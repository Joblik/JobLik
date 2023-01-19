import { useState,useEffect } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator,Image,SafeAreaView} from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "../../api/client"
const AddReclamation = ({navigation}) => {
    const [reclamation, setReclamation] = useState('');
    const [userId, setUserId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function getUserId() {
          const id = await AsyncStorage.getItem("id");
          setUserId(JSON.parse(id));
        }
        getUserId();
        console.log(userId)
    }, [userId]);
    const handleAddReclamation = async () => {
        setError(null);
        setIsLoading(true);

        try {
            await client.post("/reclamation/addOnereclamation", { reclamation, userId });
            setIsLoading(false);
        } catch (err) {
            setError(err);
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={{  padding: 50,  flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={[      {    padding: 100,    borderColor: "black",        borderWidth: 2,        borderRadius: 50,        height: 300,        width: 300,        marginBottom: -70,        alignItems: 'center' ,        flexDirection: 'column',      },    ]}
          source={{
            uri: "https://res.cloudinary.com/dqmhtibfm/image/upload/v1674077903/shutterstock_1039453264_s7y1rt.webp",
          }}
          size={120}
        />
        <View style={{  borderColor: "red",flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <View style={{  borderWidth: 2,        borderRadius: 50, borderColor: "black",backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
  <Text>Enter your reclamation and we will make sure it gets to the right person!</Text>
</View>

          <TextInput
            value={reclamation}
            onChangeText={text => setReclamation(text)}
            placeholder="Enter reclamation"
            style={{ width: '100%', padding: 10, margin: 10 }}
          />
          {isLoading ? (
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <Button title="Add Reclamation" onPress={handleAddReclamation} />
          )}
        </View>
      </SafeAreaView>
      
    );
};
export default AddReclamation;