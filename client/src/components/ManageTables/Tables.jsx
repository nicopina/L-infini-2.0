import { useEffect, useState } from "react";
import { getTablesRequest } from "../../api/tables.api";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import NewTableForm from "./NewTableForm";
import { deleteTableRequest, updateTableRequest } from "../../api/tables.api";
import { style } from "@mui/system";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "./Tables.css";

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
    { field: "id", headerName:"ID", width: 150, editable: false, style: {color: "white"} },
    {
      field: "delete",
      headerName: "Eliminar",
      width: 200,
      textAlign: "center",
      Style: { textAlign: "center" },
      renderCell: (params) => (
        <button className="buttonred" onClick={() => handleDelete(params.row)}>Borrar</button>
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
