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
import { Card, CardHeader, CardTitle, CardBody, Form, Input,CardImg} from "reactstrap";

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
      width: 145,
      textAlign: "center",
      Style: { textAlign: "center" },
      renderCell: (params) => (
        <button className="buttonred" onClick={() => handleDelete(params.row)}>Borrar</button>
      ),
    },

  ];

  return (
    <div 
    style={{
      marginTop: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
    >
      <h1 style={{color:'black'}}>Mesas</h1>
      <CardImg      alt="Card image cap"
                    src="https://cdn.shopify.com/s/files/1/0264/4017/1594/products/WhatsAppImage2020-10-27at20.23.15_923x.jpg?v=1621366760"
                    style={{
                        height: 200,
                        width: 300,
                        opacity: 1,
                    }}
                    />
      <Box sx={{ height: 400, width: '100%' }} key={seed} 
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
      >
        <DataGrid
          rows={tables}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getRowId={(row) => row.id}
          style={{
            minWidth: "300px",
          }}
          />
      </Box>
      <NewTableForm setSeed={setSeed} />
      </div>
  );
}

export default Tables;
