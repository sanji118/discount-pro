// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsVd_iCFRsvNY8ubXk7Z5StcuG9AxED38",
  authDomain: "discount-pro-e652a.firebaseapp.com",
  projectId: "discount-pro-e652a",
  storageBucket: "discount-pro-e652a.firebasestorage.app",
  messagingSenderId: "411716181143",
  appId: "1:411716181143:web:7255f1c3d88c105b9d9dd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const storage = getStorage(app);
export default auth;
