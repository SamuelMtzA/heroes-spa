import React, { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
//read from the local storage
const initStorage = () => {
  const storeUser = JSON.parse(localStorage.getItem("user"));

  return {
    user: storeUser,
    logged: !!storeUser,
  }
}

// console.log(initStorage());

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, initStorage);

  const login = ( name="" ) => {
    const user = { id: '123', name: name }
    const action = {type: types.login, payload: user }

    dispatch(action);
    localStorage.setItem("user", JSON.stringify(user));
  }

  const logout = () => {
    const action = {type: types.logout}
    dispatch(action);
    localStorage.removeItem("user");
  }

  console.log(authState);
  return (
    <AuthContext.Provider value={{ 
      //properties to be shared
      ...authState, 
      //methods or functions
      login, logout}
      }>
      {children}
    </AuthContext.Provider>
  ) 
};
