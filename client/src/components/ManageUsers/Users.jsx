import { useState, useEffect } from "react";
import {
  getUsersRequest,
  deleteUserRequest,
} from "../../api/users.api";

import RoleOption from "./RoleOption";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import IsActiveCheckbox from "./IsActiveCheckBox";
import NewUserForm from "./NewUserForm";

function Users(props) {
  const [users, setUsers] = useState([]);
  const [seed , setSeed] = useState(0);

  const deleteHandler = (user) => {
    deleteUserRequest(user.rut);
    setSeed(seed + 1);
  };

  useEffect(() => {
    getUsersRequest().then((response) => {
      setUsers(response.data);
    });
  }, [seed]);

  const columns = [
    { field: "rut", headerName: "Rut", width: 100 },
    { field: "name", headerName: "Nombre", width: 150 },
    { field: "lastname", headerName: "Apellido", width: 150 },
    {field: "password", headerName: "Contraseña", width: 150},
    {
      field: "role",
      headerName: "Rol",
      width: 100,
      renderCell: (params) => (
        <RoleOption params={params}/>
      ),
    },
    {
      field: "is_active",
      headerName: "Activo",
      width: 60,
      renderCell: (params) => (
        <IsActiveCheckbox params={params}/>
      ),
    },
    {
      field: "delete",
      headerName: "Eliminar",
      width: 100,
      renderCell: (params) => (
        <button onClick={() => deleteHandler(params.row)}>
          Eliminar
        </button>
      ),
    },
  ];

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }} key={seed}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getRowId={(row) => row.rut}
        />
      </Box>
      <NewUserForm setSeed={setSeed}/>
    </>
  );
}

export default Users;
