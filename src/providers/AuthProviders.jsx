import { getAuth } from "firebase/auth";
import React, { createContext } from "react";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext= createContext(null);

export default function AuthProviders({children}) {

  const RegisterWithPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo={
    RegisterWithPassword,
  }
  return(
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
}
