import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext= createContext(null);



export default function AuthProviders({children}) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider= new GoogleAuthProvider;
  const githubProvider= new GithubAuthProvider;

  // Register with password
  const RegisterWithPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login with password
  const LoginWithPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  // Login with google
  const LoginWithGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Login with GitHub
  const LoginWithGitHub = ()=>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }


  // Sign Out
  const Logout= ()=>{
    setLoading(true);
    return signOut(auth);
  }


  // Manage user
  useEffect( ()=>{
    const unsubscribe= onAuthStateChanged( auth, (currentUser)=>{
      console.log("User in Auth state change ", currentUser);
      setUser(currentUser);
      setLoading(false);
    } );
    return ()=>{
      unsubscribe();
    }
  } ,[])


  const authInfo={
    RegisterWithPassword,
    LoginWithPassword,
    LoginWithGoogle,
    LoginWithGitHub,
    Logout,
    loading,
    user,
  }

  return(
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
}
