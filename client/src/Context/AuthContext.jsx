import React, { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();
export const AuthProvider = (props) => {
  const [auth, setAuth] = useState(null); // inicializador de estado

  useEffect(() => {
    const dataAuth = JSON.parse(localStorage.getItem("auth"));
    if (dataAuth) {
      setAuth(dataAuth);
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};
