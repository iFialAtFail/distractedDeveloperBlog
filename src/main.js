import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCF6hufgE-_6jj0E4YKutzyNHMIyCIqUd8",
    authDomain: "distracteddeveloperblog.firebaseapp.com",
    projectId: "distracteddeveloperblog",
    storageBucket: "distracteddeveloperblog.appspot.com",
    messagingSenderId: "871795963315",
    appId: "1:871795963315:web:bceed3a465dd6b14e447c6",
    measurementId: "G-4BKH0XH766"
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireApp);

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
