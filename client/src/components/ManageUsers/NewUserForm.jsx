import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import swal from "sweetalert";

import { getRolesRequest } from "../../api/roles.api";
import { createUserRequest } from "../../api/users.api";

import "./newUserForm.css";

function NewUserForm(props) {
  const [roles, setRoles] = useState([]);
  const [message, setMessage] = useState("");
  const { setSeed } = props;

  const [user, setUser] = useState({
    rut: "",
    name: "",
    lastname: "",
    password: "",
    role: 2,
    is_active: true,
  });

  useEffect(() => {
    console.log(message);
  }, [message]);

  useEffect(() => {
    getRolesRequest().then((response) => {
      setRoles(response.data);
    });
  }, []);

  useEffect(() => {
    setUser({
      rut: "",
      name: "",
      lastname: "",
      password: "",
      role: 2,
      is_active: true,
    });
  }, [roles]);

  const mostraralerta = (state) => {
    if (state) {
      swal({
        title: "Usuario creado con éxito!",
        text: "El usuario ha sido creado con éxito",
        icon: "success",
        button: "Aceptar",
      });
    } else {
      swal({
        title: "Error!",
        text: "No se pudo crear el usuario, verifica la información ingresada.",
        icon: "error",
        button: "Aceptar",
      });
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const newUser = {
      rut: event.target.rut.value.replace(/\./g, ""),
      name: event.target.name.value,
      lastname: event.target.lastname.value,
      password: event.target.password.value,
      role: event.target.role.value,
      is_active: event.target.is_active.checked,
    };

    try {
      await createUserRequest(newUser).then((response) => {
        mostraralerta(true);
        setSeed(Math.random());
      });
    } catch (error) {
      mostraralerta(false);
    }
  };

  return (
    <>
      <h1 className="new-user-title">Crear Usuario</h1>
      <Card className="new-user-container">
        <form onSubmit={onSubmitHandler}>
          <div className="new-user-input-container">
            <div className="new-user-input-container-separator">
              <div className="new-user-input-items">
                <label>Rut:</label>
                <input
                  type="text"
                  name="rut"
                  placeholder="12345678-9"
                  defaultValue={user.rut}
                  required
                  maxLength="10"
                />
              </div>
              <div item className="new-user-input-items">
                <label>Nombre:</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user.name}
                  required
                  minLength="1"
                  maxLength="255"
                />
              </div>
              <div item className="new-user-input-items">
                <label>Apellido:</label>
                <input
                  type="text"
                  name="lastname"
                  defaultValue={user.lastname}
                  required
                  minLength="1"
                  maxLength="255"
                />
              </div>
            </div>
            <div className="new-user-input-container-separator">
              <div item className="new-user-input-items">
                <label>Contraseña:</label>
                <input
                  type="text"
                  name="password"
                  defaultValue={user.password}
                  required
                  minLength="4"
                  maxLength="255"
                />
              </div>
              <div item className="new-user-input-items">
                <label>Rol:</label>
                <select name="role" defaultValue={user.role}>
                  {roles.map((role, index) => (
                    <option key={index} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
              <div item className="new-user-input-items">
                <label>Activo:</label>
                <input
                  type="checkbox"
                  name="is_active"
                  defaultChecked={user.is_active}
                />
              </div>
            </div>
          </div>
            <div item className="new-user-input-items">
              <input type="submit" value="Crear" />
            </div>
        </form>
        {/* <p>{message}</p> */}
      </Card>
    </>
  );
}

export default NewUserForm;
