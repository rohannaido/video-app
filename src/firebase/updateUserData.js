import { 
    getFirestore, 
    doc, 
    getDoc, 
    addDoc,
    updateDoc, 
    arrayUnion, 
    deleteField } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getCurrUserId } from './auth'

const db = getFirestore();

async function updateHistory(videoId) {
    
    const userUid = getCurrUserId();
    const userRef = doc(db, "userData", userUid);

    try{
        await updateDoc(userRef, {
            history: arrayUnion(videoId)
        });
        return true;
    }
    catch(error){
        
        throw error;
    }
}

async function clearHistory() {

    const userUid = getCurrUserId();
    const userRef = doc(db, "userData", userUid);

    try{
        await updateDoc(userRef, {
            history: deleteField()
        });
        return true;
    }
    catch(error){
        throw error;
    }
}

async function updateLikedVideo(videoArr) {

    const userUid = getCurrUserId();
    const userRef = doc(db, "userData", userUid);

    try{
        await updateDoc(userRef, {
            liked: videoArr
        });
        return true;
    }
    catch(error){
        throw error;
    }

}

async function updateWatchLaterVideo(videoArr) {

    const userUid = getCurrUserId();
    const userRef = doc(db, "userData", userUid);

    try{
        await updateDoc(userRef, {
            watchLater: videoArr
        });
        return true;
    }
    catch(error){
        throw error;
    }

}

export { updateHistory, clearHistory, updateLikedVideo, updateWatchLaterVideo };