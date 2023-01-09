import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import GetLocation from 'react-native-get-location'

var loc = ''

GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
})
.then(location => {
    console.log(location);
    loc = location
})
.catch(error => {
    const { code, message } = error;
    console.warn(code, message);
})

const Map = () => {
    return (
        <View>
            <Text>Currently located in {loc}</Text>
        </View>
    )
}