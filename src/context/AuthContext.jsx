/* eslint-disable react/prop-types */

import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isUser, setIsUser] = useLocalStorage("isUser", false);

  return (
    <AuthContext.Provider value={{ isUser, setIsUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
