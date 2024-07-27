import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext= createContext(null);



export default function AuthProviders({children}) {

  const [user, setUser] = useState(null);

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

  // Manage user
  useEffect( ()=>{
    const unsubscribe= onAuthStateChanged( auth, (currentUser)=>{
      console.log("User in Auth state change ", currentUser);
      setUser(currentUser);
    } );
    return ()=>{
      unsubscribe();
    }
  } ,[])


  // Sign Out
  const Logout= ()=>{
    return signOut(auth);
  }


  const authInfo={
    RegisterWithPassword,
    LoginWithPassword,
    LoginWithGoogle,
    LoginWithGitHub,
    user,
    Logout,
  }


  return(
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
}
