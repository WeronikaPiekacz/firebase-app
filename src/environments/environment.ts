// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYP4KF8hCgxGXauJRRgKyxkSrj0Stgeb0",
  authDomain: "werka-firebase-app.firebaseapp.com",
  projectId: "werka-firebase-app",
  storageBucket: "werka-firebase-app.appspot.com",
  messagingSenderId: "739314615575",
  appId: "1:739314615575:web:c992d5685563205fc52352",
  measurementId: "G-TEGDC2FKP8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBYP4KF8hCgxGXauJRRgKyxkSrj0Stgeb0",
    authDomain: "werka-firebase-app.firebaseapp.com",
    projectId: "werka-firebase-app",
    storageBucket: "werka-firebase-app.appspot.com",
    messagingSenderId: "739314615575",
    appId: "1:739314615575:web:c992d5685563205fc52352",
    measurementId: "G-TEGDC2FKP8",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
