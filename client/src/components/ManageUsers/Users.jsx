import { useState, useEffect } from "react";
import {
  getUsersRequest,
  deleteUserRequest,
  updateUserRequest,
} from "../../api/users.api";
import swal from "sweetalert";
import RoleOption from "./RoleOption";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import IsActiveCheckbox from "./IsActiveCheckBox";
import NewUserForm from "./NewUserForm";

function Users(props) {
  const [users, setUsers] = useState([]);
  const [seed , setSeed] = useState(0);

  const deleteHandler = (user) => {
    deleteUserRequest(user.rut).then((response) => {
      setSeed(seed + 1);
    });
  };

  const updateHandler = (user) => {
    updateUserRequest(user.rut, user).then((response) => {
      setSeed(seed + 1);
    });
  };

  useEffect(() => {
    getUsersRequest().then((response) => {
      setUsers(response.data);
    });
  }, [seed]);
  const columns = [
    { field: "rut", headerName: "Rut", width: 100 ,editable:false},
    { field: "name", headerName: "Nombre", width: 150 ,editable:true},
    { field: "lastname", headerName: "Apellido", width: 150 ,editable:true},
    {field: "password", headerName: "Contraseña", width: 150,editable:true},
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
      width: 150,
      renderCell: (params) => (
        <button onClick={() => updateHandler(params.row)}>
          Eliminar
        </button>
      ),
    },
    {
      field: "update",
      headerName: "Editar",
      width: 150,
      renderCell: (params) => (
        <button onClick={() => updateHandler(params.row)}>
          Editar
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
