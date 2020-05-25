import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZlH9QrPK1Bj_p-SJeICHfNWPYlxoSfjs",
  authDomain: "task-react-firebase-1f46b.firebaseapp.com",
  databaseURL: "https://task-react-firebase-1f46b.firebaseio.com",
  projectId: "task-react-firebase-1f46b",
  storageBucket: "task-react-firebase-1f46b.appspot.com",
  messagingSenderId: "349776423234",
  appId: "1:349776423234:web:72316664a82cf2eadb40db",
};

export default firebase.initializeApp(firebaseConfig);
