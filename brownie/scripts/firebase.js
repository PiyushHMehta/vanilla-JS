// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbUQ2dk9kq6ijKXxMg5wRWz-nxnrXeDVo",
    authDomain: "brownie-website.firebaseapp.com",
    projectId: "brownie-website",
    storageBucket: "brownie-website.appspot.com",
    messagingSenderId: "17519350918",
    appId: "1:17519350918:web:efddb745ebd0d68484ed07",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();
