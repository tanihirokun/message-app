import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBtmM2KC5LBK6V61qttd7W8KJJaoIZQUvw",
  authDomain: "twitter-clone-udemy-4f2b4.firebaseapp.com",
  projectId: "twitter-clone-udemy-4f2b4",
  storageBucket: "twitter-clone-udemy-4f2b4.appspot.com",
  messagingSenderId: "17994476330",
  appId: "1:17994476330:web:5f31308843139c9e9b8c53"
}

// appで初期化しているので、appをgetFirestoreに渡す
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
