import { useEffect, useState } from "react";
import { getTablesRequest } from "../../api/tables.api";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import NewTableForm from "./NewTableForm";
import { deleteTableRequest, updateTableRequest } from "../../api/tables.api";

function Tables() {
  const [tables, setTables] = useState([]);
  const [seed, setSeed] = useState(0);

  function handleDelete(table) {
    deleteTableRequest(table.id).then((response) => {
      setSeed(seed + 1);
    });
  }

  useEffect(() => {
    getTablesRequest().then((response) => {
      setTables(response.data);
    });
  }, [seed]);

  const columns = [
    { field: "id", headerName: "ID", width: 100, editable: false },
    {
      field: "delete",
      headerName: "Eliminar",
      width: 100,
      renderCell: (params) => (
        <button onClick={() => handleDelete(params.row)}>Eliminar</button>
      ),
    },
  ];

  return (
    <>
      <Box sx={{ height: 400, width: "100%" }} key={seed}>
        <DataGrid
          rows={tables}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getRowId={(row) => row.id}
        />
      </Box>
      <NewTableForm setSeed={setSeed} />
    </>
  );
}

export default Tables;
