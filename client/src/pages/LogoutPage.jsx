import { useContext , useEffect } from 'react';
import { UserContext } from '../Context/UserContext';


function LogoutPage() {
    const [user, setUser] = useContext(UserContext);
    useEffect(() => {
        setUser({
            rut: "",
            name: "",
            role: null,
        });
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("table");
        window.location.reload();
    }, []);
  return (
    <div>LogoutPage</div>
  )
}

export default LogoutPage