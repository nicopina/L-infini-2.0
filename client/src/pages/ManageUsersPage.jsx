import { useEffect, useState } from "react";
import NewUserForm from "../components/ManageUsers/NewUserForm";
import Users from "../components/ManageUsers/Users";

function ManageUsersPage() {

  return (
    <div>
      <h1>Manage Users</h1>
        <Users/>
        {/* <NewUserForm/> */}
    </div>
  );
}

export default ManageUsersPage;
