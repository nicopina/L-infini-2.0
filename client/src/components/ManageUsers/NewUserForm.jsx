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
    console.log(newUser);
    try {
      await createUserRequest(newUser).then((response) => {
        mostraralerta(true);
        // setMessage(response.data.message);
        setSeed(Math.random());
      });
    } catch (error) {
      mostraralerta(false);
    }
  };

  // createUserRequest(newUser);
  // setSeed((seed) => seed + 1);

  return (
    <Card className="new-user-container">
      <form onSubmit={onSubmitHandler}>
        {/* <div className="new-user-form">
          <div className=" new-user-form__column">
            <div className="new-user-form__row">
              <label>Rut</label>
              <input
                
                type="text"
                name="rut"
                placeholder="12345678-9"
                defaultValue={user.rut}
                required
                maxLength="10"
              />
            </div>
            <div className="new-user-form__row">
              <label >
                Name:
                <input
                  
                  type="text"
                  name="name"
                  defaultValue={user.name}
                  required
                  minLength="1"
                  maxLength="255"
                />
              </label>
            </div>
            <div className="new-user-form__row">
              <label >
                Lastname:
                <input
                  
                  type="text"
                  name="lastname"
                  defaultValue={user.lastname}
                  required
                  minLength="1"
                  maxLength="255"
                />
              </label>
            </div>
          </div>
          <div className=" new-user-form__column">
            <div className="new-user-form__row">
              <label >
                Password:
                <input
                  
                  type="text"
                  name="password"
                  defaultValue={user.password}
                  required
                  minLength="4"
                  maxLength="255"
                />
              </label>
            </div>
            <div className="new-user-form__row">
              <label >
                Role:
                <select
                  
                  name="role"
                  defaultValue={user.role}
                >
                  {roles.map((role, index) => (
                    <option key={index} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="new-user-form__row">
              <label >
                Is Active:
                <input
                  
                  type="checkbox"
                  name="is_active"
                  defaultChecked={user.is_active}
                />
              </label>
            </div>
          </div>
        </div> */}

        <Grid container spacing={2} className="new-user-input">
          <Grid item xs={12} sm={6} className= "new-user-input">
            <label >Rut</label>
            <input
              
              type="text"
              name="rut"
              placeholder="12345678-9"
              defaultValue={user.rut}
              required
              maxLength="10"
            />
          </Grid>
          <Grid item xs={12} sm={6} className= "new-user-input" >
            <label >
              Name:
            </label>
              <input
                type="text"
                name="name"
                defaultValue={user.name}
                required
                minLength="1"
                maxLength="255"
                
              />
          </Grid>
          <Grid item xs={12} sm={6} className= "new-user-input">
            <label >
              Lastname:
            </label>
              <input
                
                type="text"
                name="lastname"
                defaultValue={user.lastname}
                required
                minLength="1"
                maxLength="255"
              />
          </Grid>
          <Grid item xs={12} sm={6} className= "new-user-input">
            <label >
              Password:
            </label>
              <input
              
                type="text"
                name="password"
                defaultValue={user.password}
                required
                minLength="4"
                maxLength="255"
              />
          </Grid>
          <Grid item xs={12} sm={6} className= "new-user-input">
            <label >
              Role:
            </label>
              <select  
              name="role" defaultValue={user.role}>
                {roles.map((role, index) => (
                  <option key={index} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
          </Grid>
          <Grid item xs={12} sm={6} className= "new-user-input">
            <label >
              Is Active:
            </label>
              <input
                
                type="checkbox"
                name="is_active"
                defaultChecked={user.is_active}
              />
          </Grid>
          <Grid item xs={12} sm={6} className= "new-user-input">
            <input type="submit" value="Submit" />
          </Grid>
        </Grid>
      </form>
      {/* <p>{message}</p> */}
    </Card>
  );
}

export default NewUserForm;
