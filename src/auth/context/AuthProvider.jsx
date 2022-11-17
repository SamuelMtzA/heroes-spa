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

console.log(initStorage());

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, initStorage);

  const login = ( name="" ) => {
    const user = {
      id: '123',
      name: name,
    }
    const action = {
      type: types.login,
      payload: user
    }

    dispatch(action);
    localStorage.setItem("user", JSON.stringify(user));
  }

  return (
    <AuthContext.Provider value={{ ...authState, login: login}}>
      {children}
    </AuthContext.Provider>
  ) 
};
