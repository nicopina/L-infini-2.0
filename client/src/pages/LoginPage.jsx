import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signInRequest } from "../api/auth.api.js";
import { UserContext } from "../Context/UserContext.jsx";
import "./LoginPage.css";

function LoginPage() {
  
  const [user, setUser] = useContext(UserContext);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [body, setBody] = useState({
    rut: "",
    password: "",
  });

  async function onSubmitHandler() {
    try {
      await signInRequest(body).then((response) => {
        if (response.status === 200) {
          //save token in local storage
          localStorage.setItem("token", response.data);
          //reload page
          window.location.reload().then(() => {
            navigate(from);
          });
        }
      });
    } catch (error) {
      setMessage("Usuario o contraseña incorrectos");
    }
  }

  function inputChangeHandler(e) {
    const { name, value } = e.target;
    setBody({
      ...body,
      [name]: value,
    });
  }

  return (
    <div className="Login">
      <h2>Login Page</h2>
      <label>
        <span>Ingrese RUT: </span>
        <input
            type="text"
            name="rut"
            value={body.rut}
            onChange={inputChangeHandler}
            placeholder="XXXXXXXX-X"
          />
      </label>
      <label>
        <span>Ingrese contraseña</span>
        <input
            type="password"
            name="password"
            value={body.password}
            onChange={inputChangeHandler}
            placeholder="********"
          />
      </label>
      <p>{message}</p>
      <div className="button" onClick={onSubmitHandler} value="Login">Login</div>   
    </div>
  );
}

export default LoginPage;
