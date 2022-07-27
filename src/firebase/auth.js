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
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig.js";

const app = initializeApp(firebaseConfig);
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

function getCurrUserId(){
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     uid = user.uid;
  //   } else {
  //     console.log("else");
  //   }
  // });
  if(auth.currentUser){
    const userUid = auth.currentUser.uid;
    return userUid;
  }
}

export { loginApp, signOutApp, getCurrUserId };
