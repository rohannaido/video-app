import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    getDocs, 
    query,
    where 
} from "firebase/firestore"; 
import { getCurrUserId } from "./auth";

const db = getFirestore();

async function getUserData(uuid){
  console.log(db);
  try{
    const userUid = getCurrUserId();
    const docRef = doc(db, "userData", userUid);
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

export { getUserData };