import firebaseConfig from "../firebaseConfig.js";
import { initializeApp } from "firebase/app";
import { loginApp, signOutApp } from "./auth.js";
import { getUserData } from "./fetchData.js";
import { updateHistory, clearHistory } from "./updateUserData.js";

const app = initializeApp(firebaseConfig);

export { loginApp, signOutApp, getUserData, updateHistory, clearHistory };