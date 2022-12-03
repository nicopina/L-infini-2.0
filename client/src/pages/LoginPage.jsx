import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { signInRequest } from "../api/auth.api.js";
import { UserContext } from "../Context/UserContext.jsx";

function LoginPage() {
  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [body, setBody] = useState({
    rut: "",
    password: "",
  });

  async function onSubmitHandler() {
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
