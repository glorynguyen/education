// ===========================
// FIREBASE CONFIGURATION
// ===========================

const firebaseConfig = {
    apiKey: "AIzaSyCrayfdLPobe8xiTU6siDYbI1T6bv9K9jo",
    authDomain: "baucua-70f9b.firebaseapp.com",
    databaseURL: "https://baucua-70f9b-default-rtdb.firebaseio.com",
    projectId: "baucua-70f9b",
    storageBucket: "baucua-70f9b.firebasestorage.app",
    messagingSenderId: "807035202882",
    appId: "1:807035202882:web:a3afb540b888cf8c636cdb",
    measurementId: "G-0LW1XK5PWR"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// Global user state
let currentUser = null;

console.log('🔥 Firebase initialized successfully');