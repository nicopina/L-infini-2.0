import { useEffect, useState } from "react";

import { getRolesRequest } from "../../api/roles.api";
import { createUserRequest } from "../../api/users.api";

function NewUserForm(props) {
  const [roles, setRoles] = useState([]);
  const [message, setMessage] = useState("");
  const { setSeed } = props;

  useEffect(() => {
    console.log(message);
  }, [message]);

  useEffect(() => {
    getRolesRequest().then((response) => {
      setRoles(response.data);
    });
  }, []);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const newUser = {
      rut: event.target.rut.value,
      name: event.target.name.value,
      lastname: event.target.lastname.value,
      password: event.target.password.value,
      role: event.target.role.value,
      is_active: event.target.is_active.checked,
    };

    const response = await createUserRequest(newUser);
    setMessage(response.data);
    setSeed(Math.random());

    // createUserRequest(newUser);
    // setSeed((seed) => seed + 1);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>Rut</label>
        <input type="text" name="rut" />
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Lastname:
          <input type="text" name="lastname" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
        <label>
          Role:
          <select name="role">
            {roles.map((role, index) => (
              <option key={index} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Is Active:
          <input type="checkbox" name="is_active" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {/* <p>{message}</p> */}
    </div>
  );
}

export default NewUserForm;
