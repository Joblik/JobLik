// Import the functions you need from the SDKs you need
import { initializeApp,auth } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1AY6geIUMD5xJvVuNJZGANDftJV6QV54",
  authDomain: "joblik-a44ce.firebaseapp.com",
  projectId: "joblik-a44ce",
  storageBucket: "joblik-a44ce.appspot.com",
  messagingSenderId: "815528479624",
  appId: "1:815528479624:web:3f13e77e471302cdbd483d",
  measurementId: "G-WFLKQH8JSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const authentication = auth(app);

export { authentication };