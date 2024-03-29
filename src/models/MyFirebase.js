import { formatStrToDataId } from "../utils/formatStrToDataId.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, setDoc, deleteDoc, updateDoc, getDocs, getFirestore } from "firebase/firestore";
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

  return {
    getAllTechs: async () => {
      const techsRef = collection(db, "Techs");
      return (await getDocs(techsRef)).docs.map(item => item.data());
    },
    getAllSelectedTechs: async () => {
      const selectedTechsRef = collection(db, "SelectedTechs");
      return (await getDocs(selectedTechsRef)).docs.map(item => item.data());
    },
    addTech: async ({ id, name, url, description }) => {
      const dataId = formatStrToDataId(name);
      await setDoc(doc(db, "Techs", dataId), { id, name, url, description });
    },
    selectTech: async ({ id, name, url, description }) => {
      const dataId = formatStrToDataId(name);
      await setDoc(doc(db, "SelectedTechs", dataId), { id, name, url, description });
    },
    removeTech: async ({ name }) => {
      const dataId = formatStrToDataId(name);
      await deleteDoc(doc(db, "SelectedTechs", dataId));
    },
    updateTech: async ({ id, name, url, description }) => {
      const dataId = formatStrToDataId(name);
      await updateDoc(doc(db, "Techs", dataId), { id, name, url, description });
    },
  };
};

export const myFirebase = MyFirebase();
