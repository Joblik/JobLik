// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { createStackNavigator } from '@react-navigation/stack';

// import getCurrentPosition from 'react-native-get-location'



// Geolocation.getCurrentPosition(
//     success: (
//       position: {
//         coords: {
//           latitude: number;
//           longitude: number;
//           altitude: number | null;
//           accuracy: number;
//           altitudeAccuracy: number | null;
//           heading: number | null;
//           speed: number | null;
//         };
//         timestamp: number;
//       }
//     ) => void,
//     error?: (
//       error: {
//         code: number;
//         message: string;
//         PERMISSION_DENIED: number;
//         POSITION_UNAVAILABLE: number;
//         TIMEOUT: number;
//       }
//     ) => void,
//     options?: {
//         timeout?: number;
//         maximumAge?: number;
//         enableHighAccuracy?: boolean;
//     }
//   )

// const Map = () => {
//     return (
//         <View>
//             <Text style={{padding: 100}}>Currently located in</Text>
//         </View>
//     )
// }
// export default Map;