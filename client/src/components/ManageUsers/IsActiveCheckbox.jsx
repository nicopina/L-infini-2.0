import {
    getUsersRequest,
    updateUserRequest,
    deleteUserRequest,
  } from "../../api/users.api";
function IsActiveCheckbox (props) {

    const isActiveHandler = (user) => {
        user.is_active = !user.is_active;
        updateUserRequest(user.rut, user);

    };

    
    return (
        <input
          type="checkbox"
          checked={props.params.row.is_active}
          onChange={() => isActiveHandler(props.params.row)}
        />
    );
}

export default IsActiveCheckbox;