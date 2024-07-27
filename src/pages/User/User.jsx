import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

export default function User() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user ? (
        <div>
          <h1 className="text-5xl font-bold">User info:</h1>
          <h2>Name: {user.displayName}</h2>
          <h2>Email: {user.email}</h2>
          <div>
            <img src={user.photoURL} alt="" />
          </div>
        </div>
      ) : (
        <div>
          <Navigate to="/"></Navigate>
        </div>
      )}
    </div>
  );
}
