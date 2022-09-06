import React from 'react'
import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';
//read from the local storage
const initialState = {
  logged: false,
  name: null,
};

export const AuthProvider = ( { children } ) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ }}>
      { children }
    </AuthContext.Provider>
  )
}
