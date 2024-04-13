import {getApp,getApps,initializeApp } from "firebase/app";

import{getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCN9VjhLrT-plBhJj1p3OO58wpfpOFOcW0",
    authDomain: "dermai-dbd02.firebaseapp.com",
    projectId: "dermai-dbd02",
    storageBucket: "dermai-dbd02.appspot.com",
    messagingSenderId: "370483938467",
    appId: "1:370483938467:web:ffb6ec2dfad377c6b4eb16",
    measurementId: "G-3Q51EPT6P1"
  };

const app=initializeApp(firebaseConfig);
const storage=getStorage(app);

export {app,storage};