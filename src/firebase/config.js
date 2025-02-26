import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAb41h_BgV1w3H4DHrhHSsca52ni8pjX1M",
  authDomain: "olx-clone-react-a2298.firebaseapp.com",
  projectId: "olx-clone-react-a2298",
  storageBucket: "olx-clone-react-a2298.firebasestorage.app",
  messagingSenderId: "967343524795",
  appId: "1:967343524795:web:b0df04eea08ef97b41d29e"
};

const firebase = initializeApp(firebaseConfig);

export { firebase };
