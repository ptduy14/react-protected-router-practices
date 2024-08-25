import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ isAuthenticate: false, user: {} });

  const logout = () => {
    setAuth({isAuthenticate: false, user: {}});
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const value = useContext(AuthContext);

  if (value === undefined) {
    throw new Error("please use Context with Provider !");
  }

  return value;
}
