import firebaseConfig from "../firebaseConfig.js";
import { 
  getFirestore, 
  collection, 
  doc, 
  getDoc,
  getDocs, 
  query,
  where 
} from "firebase/firestore"; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const db = getFirestore(app);
const auth = getAuth();

async function loginApp(email, password){
    try{
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      return user;
    }
    catch(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      // return errorCode;
      console.log(error);
      throw errorCode;
    }
}

export { loginApp };