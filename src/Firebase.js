// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCHXU9pApdHH0bzOIT98wYyirHaLXi_OlE",

  authDomain: "twitter-clone-4d163.firebaseapp.com",

  projectId: "twitter-clone-4d163",

  storageBucket: "twitter-clone-4d163.appspot.com",

  messagingSenderId: "1013120399982",

  appId: "1:1013120399982:web:0fd17e52b03a2ea5f0047f",

  measurementId: "G-6XCHTZY6MK"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app