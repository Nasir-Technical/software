// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvGVxbU78KW0JfwuAAqAZVzwVa0gupafg",
  authDomain: "fb-db-auth-d1bf6.firebaseapp.com",
  databaseURL: "https://fb-db-auth-d1bf6-default-rtdb.firebaseio.com",
  projectId: "fb-db-auth-d1bf6",
  storageBucket: "fb-db-auth-d1bf6.appspot.com",
  messagingSenderId: "155886416049",
  appId: "1:155886416049:web:73ed72f75235c0bebb3290"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;