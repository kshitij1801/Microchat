import firebase from "firebase/app"
import "firebase/auth"

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyBxYrBPBvncgg6XLMCRbb9xCvdVeAUl1MM",
  authDomain: "microchat-576ce.firebaseapp.com",
  projectId: "microchat-576ce",
  storageBucket: "microchat-576ce.appspot.com",
  messagingSenderId: "549983730027",
  appId: "1:549983730027:web:4f5896935fea270056b42e"
}).auth()


