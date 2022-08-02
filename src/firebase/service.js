import firebaseConfig from "../firebaseConfig.js";
import { initializeApp } from "firebase/app";
import { loginApp, signOutApp, createUser } from "./auth.js";
import { getUserData } from "./fetchData.js";
import { updateHistory, clearHistory, updateLikedVideo, updateWatchLaterVideo } from "./updateUserData.js";

const app = initializeApp(firebaseConfig);

export { loginApp, signOutApp, createUser, getUserData, updateHistory, clearHistory, updateLikedVideo, updateWatchLaterVideo };