// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
const MyFirebase = () => {
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDcbMKVE0ti-K_IB8-OvU_9y9Oysmqzb0o",
    authDomain: "devdeck-8ebb4.firebaseapp.com",
    projectId: "devdeck-8ebb4",
    storageBucket: "devdeck-8ebb4.appspot.com",
    messagingSenderId: "1036528262300",
    appId: "1:1036528262300:web:a525aa314e961ee8222159"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const me = {};
  me.getAllTechs = async () => {
    const techsRef = collection(db, "Techs");
    return (await getDocs(techsRef)).docs.map(item => item.data());
  };
  return me;
};

export const myFirebase = MyFirebase();
