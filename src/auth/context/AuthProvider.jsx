import React, { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
//read from the local storage
const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = ( name="" ) => {
    const action = {
      type: types.login,
      payload: {
        id: '123',
        name: name,
      }
    }

    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{ ...authState, login: login}}>
      {children}
    </AuthContext.Provider>
  ) 
};
