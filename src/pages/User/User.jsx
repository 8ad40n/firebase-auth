import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

export default function User() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {
        user ? 
        <div>
          <h1 className='text-5xl font-bold'>User info:</h1>
          <h2>Name: {user.displayName}</h2>
          <h2>Email: {user.email}</h2>
          <div>
            <img src={user.photoURL} alt="" />
          </div>
        </div>:
        <div>
          <h1>Please Login first!</h1>
        </div>
      }
    </div>
  )
}
