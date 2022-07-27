import firebaseConfig from "../firebaseConfig.js";
import { initializeApp } from "firebase/app";

import { userLogIn, userLogOut } from "../redux/userRedux.js";

import { 
  getFirestore, 
  collection, 
  doc, 
  getDoc,
  getDocs, 
  query,
  where 
} from "firebase/firestore"; 
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

async function loginApp(dispatch, email, password){
  try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const { accessToken, uid, displayName } = user;
      console.log('accessToken: ', accessToken);
      dispatch(userLogIn({ accessToken, uid, displayName }));
      return displayName;
    }
    catch(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      // return errorCode;
      console.log(error);
      throw errorCode;
    }
}

async function signOutApp(dispatch){
  signOut(auth).then(() => {
    // Sign-out successful.
    dispatch(userLogOut())
  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
}

async function getUserData(uuid){
  console.log(db);
  try{
    const docRef = doc(db, "userData", uuid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  }
  catch(error){
    console.log(error);
  }

}

export { loginApp, signOutApp, getUserData };