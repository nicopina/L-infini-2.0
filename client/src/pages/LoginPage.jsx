import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Card } from "reactstrap";
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
    if (body.rut === "" || body.password === "") {
      setMessage("Ingrese rut y contraseña");
      return;
    } else {
      try {
        await signInRequest(body).then((response) => {
          if (response.status === 200) {
            //save token in local storage
            localStorage.setItem("token", response.data);
            // localStorage.setItem("token-time")
            setMessage("Ingreso exitoso");
            //reload page
            window.location.reload().then(() => {
              navigate(from);
            });
          } else {
            setMessage("Usuario o contraseña incorrectos");
          }
        });
      } catch (error) {
        console.error(error);
      }
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
    <Card className="login-card">
      <form className="login-form">
        <div className="login-title">
        <h1>Iniciar Sesión</h1>
        </div>
        <div className="login-inputs">
          <input
            className="login-input"
            type="text"
            name="rut"
            placeholder="Rut"
            onChange={inputChangeHandler}
            minLength="8"
            maxLength="12"
            required
          />
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={inputChangeHandler}
            minLength="4"
            required
          />
        </div>
        <div className="login-buttons">
          <button
            className="login-button"
            type="button"
            onClick={onSubmitHandler}
          >
            Ingresar
          </button>
        </div>
      </form>
      <div className="message">
        <p>{message}</p>
      </div>
    </Card>
  );
}

export default LoginPage;
