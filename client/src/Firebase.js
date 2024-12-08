import { getAuth, GithubAuthProvider } from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "github-login-d059b.firebaseapp.com",
    projectId: "github-login-d059b",
    storageBucket: "github-login-d059b.firebasestorage.app",
    messagingSenderId: "503392032165",
    appId: "1:503392032165:web:68e61cd41b8969f464844c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GithubAuthProvider()

export { auth, provider }