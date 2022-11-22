import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  // const [rut, setRut] = useState("");
  // const [password, setPassword] = useState("");

  const [body, setBody] = useState({
    rut: "",
    password: "",
  });

  function onSubmitHandler() {
    console.log(body);
  }

  function inputChangeHandler(e) {
    const { name, value } = e.target;
    setBody({
      ...body,
      [name]: value,
    });
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Rut:
          <input
            type="text"
            name="rut"
            value={body.rut}
            onChange={inputChangeHandler}
          />
        </label>
        <label>
          Constraseña:
          <input
            type="password"
            name="password"
            value={body.password}
            onChange={inputChangeHandler}
          />
        </label>
        <input type="button" onClick={onSubmitHandler} />
      </form>
    </div>
  );
}

export default LoginPage;
