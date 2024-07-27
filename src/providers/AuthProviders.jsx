import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { createContext } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext= createContext(null);



export default function AuthProviders({children}) {

  const googleProvider= new GoogleAuthProvider;
  const githubProvider= new GithubAuthProvider;

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

  // Login with GitHub
  const LoginWithGitHub = ()=>{
    return signInWithPopup(auth, githubProvider);
  }


  const authInfo={
    RegisterWithPassword,
    LoginWithPassword,
    LoginWithGoogle,
    LoginWithGitHub
  }


  return(
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
}
