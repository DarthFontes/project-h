  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDtSmDl6qspFYsab4R-YkSNefXfRfss4EU",
    authDomain: "project-h-2f943.firebaseapp.com",
    projectId: "project-h-2f943",
    storageBucket: "project-h-2f943.firebasestorage.app",
    messagingSenderId: "728362497006",
    appId: "1:728362497006:web:deb26f8cb96695e75194ff",
    measurementId: "G-PMFS5V44YZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);