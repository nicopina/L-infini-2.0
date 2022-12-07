import { useEffect, useState } from "react";
import NewUserForm from "../components/ManageUsers/NewUserForm";
import Users from "../components/ManageUsers/Users";

function ManageUsersPage() {

  return (
    <div>
      <h1 style={{color:'black',textAlign:'center',alignItems:'center'}}>Manage Users</h1>
        <Users/>
        {/* <NewUserForm/> */}
    </div>
  );
}

export default ManageUsersPage;
