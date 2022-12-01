import { createContext , useState , useEffect } from "react";
import { getUserByTokenRequest } from "../api/auth.api";

export const UserContext = createContext();
export const UserProvider = (props) => {
    const [user, setUser] = useState({
        rut: "",
        name: "",
        role: localStorage.getItem("role"),
    }); // inicializador de estado
    
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token !== null) {
            getUserByTokenRequest(token).then((response) => {
                localStorage.setItem("role", response.data.role);
                setUser({
                    rut: response.data.rut,
                    name: response.data.name,
                    role: response.data.role,
                });
            });
        }
    }, []);

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
};
