import { createContext, useState, useEffect } from "react";
import { getUserByTokenRequest } from "../api/auth.api";

export const UserContext = createContext();
export const UserProvider = (props) => {
  const [user, setUser] = useState({
    rut: "",
    name: "",
    role: localStorage.getItem("role"),
  }); // inicializador de estado
  const [table, setTable] = useState(
    localStorage.getItem("table") || undefined
  );

  function removeData() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("table");
    setUser({
      rut: "",
      name: "",
      role: null,
    });
  }

  async function verifyToken() {
    const token = localStorage.getItem("token");
    if (token !== null) {
      try {
        await getUserByTokenRequest(token).then((response) => {
          if (response.status == 200) {
            localStorage.setItem("role", response.data.role);
            setUser({
              rut: response.data.rut,
              name: response.data.name,
              role: response.data.role,
            });
          } else if (response.status === 401) {
            removeData();
          }
        });
      } catch (error) {
        removeData();
      }
    }
    else{
        removeData();
    }
  }

  useEffect(() => {
    verifyToken();
  }, []);

  useEffect(() => {
    if (table !== undefined) {
      localStorage.setItem("table", table);
    }
  }, [table]);

  return (
    <UserContext.Provider value={[user, setUser, table, setTable]}>
      {props.children}
    </UserContext.Provider>
  );
};
