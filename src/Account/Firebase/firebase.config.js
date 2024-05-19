import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCfHy-8yqEHQTCc4TbS2Q5sjse3TvrGHDs",
    authDomain: "bistro-boss-24a97.firebaseapp.com",
    projectId: "bistro-boss-24a97",
    storageBucket: "bistro-boss-24a97.appspot.com",
    messagingSenderId: "549302440279",
    appId: "1:549302440279:web:e9e8131e4214c1d816ee12",
    measurementId: "G-DF5D6FYY11"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);