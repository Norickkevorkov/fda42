import Vue from 'vue';
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
firebase.initializeApp({
    apiKey: "AIzaSyCeb_Q3f0IKaFdFx0tqh5_UBrjNkViUoFY",
    authDomain: "rem-edu-plat.firebaseapp.com",
    databaseURL: "https://rem-edu-plat.firebaseio.com",
    projectId: "rem-edu-plat",
    storageBucket: "rem-edu-plat.appspot.com",
    messagingSenderId: "681202599255",
    appId: "1:681202599255:web:bbd7f8c5d468923cc9ea12",
    measurementId: "G-S1NTLW7186"
});
export const auth = firebase.auth();
Vue.prototype.$fb = firebase;
export default firebase;
