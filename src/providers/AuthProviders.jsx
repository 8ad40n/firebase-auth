import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { createContext } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext= createContext(null);



export default function AuthProviders({children}) {
  const googleProvider= new GoogleAuthProvider;


  // Register with password
  const RegisterWithPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login with password
  const LoginWithPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


  // Login with google
  const LoginWithGoogle = ()=>{
    return signInWithPopup(auth, googleProvider);
  };



  
  const authInfo={
    RegisterWithPassword,
    LoginWithPassword,
    LoginWithGoogle
  }
  return(
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
}
