import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-elements';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function Map({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [pin, setPin] = useState({
    latitude:13.406,
    longitude:123.3753,
  })

  const confirmLoc = () => {
    AsyncStorage.setItem('lgt',pin.longitude);
    AsyncStorage.setItem('lat',pin.latitude)
    console.log('confirmed coords: '+pin)
    navigation.goBack()
  }
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      })
    })();
  }, []);
  return (
    <View style={styles.container}>

<GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyANZMbB_iekiyNxhMJk5Ei_f09zY_XVOe0',
        language: 'en',
      }}
    />
      <MapView style={styles.map} 
          initialRegion={{
            latitude: 36.806389,
            longitude: 	10.181667,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
<Marker
  coordinate={pin}
  ></Marker>

          </MapView>
          <Button
          title={'Confirm Location'}
          onPress={confirmLoc}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  map: {
    width: '100%',
    height: '80%',
  },
});
