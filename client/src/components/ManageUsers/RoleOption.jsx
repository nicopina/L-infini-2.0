import { useState, useEffect } from "react";
import { getRolesRequest } from "../../api/roles.api";
import { updateUserRequest } from "../../api/users.api";

function RoleOption(props) {
    const [roles, setRoles] = useState([]);
    
    useEffect(() => {
        getRolesRequest().then((response) => {
            setRoles(response.data);
        });
    }, []);
    
    const roleHandler = (user, event) => {
        user.role = event.target.value;
        updateUserRequest(user.rut, user);
        console.log(user.role);
    };
    
    return (
        <select
        value={props.params.row.role}
        onChange={(e) => roleHandler(props.params.row, e)}
        >
      {roles.map((role, index) => (
          <option key={index} value={role.id}>
          {role.name}
        </option>
      ))}
    </select>
  );
}

export default RoleOption;
