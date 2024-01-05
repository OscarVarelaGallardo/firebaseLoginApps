
import './App.css'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup} from "firebase/auth";
import firebase from 'firebase/compat/app';


import 'firebase/compat/auth';


function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDaVrbSDLrSjyTrMj1FCh6S77cy6WSis8o",
    authDomain: "bdexample-b2a6f.firebaseapp.com",
    projectId: "bdexample-b2a6f",
    storageBucket: "bdexample-b2a6f.appspot.com",
    messagingSenderId: "722125894514",
    appId: "1:722125894514:web:e87168ee19c4500837a3eb",
    measurementId: "G-3VQNDPMBPB"
  };
  initializeApp(firebaseConfig);
  const auth = getAuth();
  const loginGoogle = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log("login google")
  }
  const loginFacebook = async () => {

    const provider = new firebase.auth.FacebookAuthProvider();
    try {
      const res = await signInWithPopup(auth, provider)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1>Login Firebase</h1>
      <div className="container">
        <button className="btn btn-primary" onClick={loginGoogle}>Login Google</button>
        <button className="btn btn-primary" onClick={loginFacebook}>Login Facebook</button>
      </div>
    </>
  )
}

export default App
