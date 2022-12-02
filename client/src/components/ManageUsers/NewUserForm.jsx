import { useEffect, useState } from "react";

import { getRolesRequest } from "../../api/roles.api";
import { createUserRequest } from "../../api/users.api";

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

    await createUserRequest(newUser).then((response) => {
      console.log(response.json);
      // setMessage(response.data.message);
      setSeed(Math.random());
    });
  };

    // createUserRequest(newUser);
    // setSeed((seed) => seed + 1);

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>Rut</label>
        <input type="text" name="rut" defaultValue={user.rut} />
        <label>
          Name:
          <input type="text" name="name" defaultValue={user.name} />
        </label>
        <label>
          Lastname:
          <input type="text" name="lastname" defaultValue={user.lastname} />
        </label>
        <label>
          Password:
          <input type="text" name="password" defaultValue={user.password} />
        </label>
        <label>
          Role:
          <select name="role" defaultValue={user.role}>
            {roles.map((role, index) => (
              <option key={index} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Is Active:
          <input type="checkbox" name="is_active" defaultChecked={user.is_active} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {/* <p>{message}</p> */}
    </div>
  );
}

export default NewUserForm;
