import { useState,useEffect } from 'react';
import { View, TextInput, Button, Text, ActivityIndicator,Image} from 'react-native';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
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
            await axios.post("http://10.255.255.112:3000/reclamation/addOnereclamation", { reclamation, userId });
            setIsLoading(false);
        } catch (err) {
            setError(err);
            setIsLoading(false);
        }
    };

    return (
        <View style={{ flexDirection: 'column', alignItems: 'center' , marginTop:500 }}>
        <TextInput
            value={reclamation}
            onChangeText={text => setReclamation(text)}
            placeholder="Enter reclamation"
        />
        {isLoading ? (
            <ActivityIndicator size="small" color="#0000ff" />
        ) : (
            <Button title="Add Reclamation" onPress={handleAddReclamation} />
        )}
    </View>
    
    );
};
export default AddReclamation;