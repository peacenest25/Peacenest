// Firebase configuration - replace with your project's credentials
const firebaseConfig = {
  apiKey: "AIzaSyAM6z68yNd9BcLOG0btHdUVkVbCLGpH7S0",
  authDomain: "peacenest-40690.firebaseapp.com",
  projectId: "peacenest-40690",
  storageBucket: "peacenest-40690.firebasestorage.app",
  messagingSenderId: "767044125585",
  appId: "1:767044125585:web:f0430bb1a978e10d2cd030",
  measurementId: "G-PD0DE9K9HL"
};

// Initialize Firebase services
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database(); // Optional if using Realtime Database
const analytics = firebase.analytics(); // Optional if using Analytics

