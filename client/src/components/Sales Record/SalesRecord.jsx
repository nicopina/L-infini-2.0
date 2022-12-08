import { getOrdersRequest } from "../../api/orders.api";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./SalesRecord.css";

function SalesRecord() {
  const [orders, setOrders] = useState([]);
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    getOrdersRequest().then((response) => {
        const orders = [];
        response.data.map((order) => {

        switch (order.state) {
            case 0:
                order.state = "En preparación";
            break;
            case 1:
                order.state = "Enviado";
            break;
            case 2:
                order.state = "Pagado";
            break;
            default:
            break;
        }
        //formatear fecha
        function formatDate(date) {
            var d = new Date(date),
                month = "" + (d.getMonth() + 1),
                day = "" + d.getDate(),
                year = d.getFullYear(),
                hour = d.getHours(),
                minutes = d.getMinutes(),
                seconds = d.getSeconds();

            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;

            return [year, month, day].join("-") + " " + [hour, minutes, seconds].join(":");
        }

        order.created_at = formatDate(order.created_at);
        order.updated_at = formatDate(order.updated_at);

        orders.push(order);
        });

      setOrders(orders);
    });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 100, editable: false },
    { field: "table_id", headerName: "Mesa", width: 100, editable: false },
    { field: "state", headerName: "Estado", width: 150, editable: false },
    {
      field: "created_at",
      headerName: "Fecha Creación",
      width: 300,
      editable: false,
    },
    {
      field: "updated_at",
      headerName: "Fecha Actualización",
      width: 300,
      editable: false,
    },
  ];

  return (
    <div className="SalesRecord__container">
      <h1 className="SalesRecords__title">Historial de Ventas</h1>
      <Box
        className="SalesRecords__box"
        sx={{ height: 400, width: "100%" }}
        key={seed}
      >
        <DataGrid
          className="SalesRecords-table"
          rows={orders}
          columns={columns}
          pageSize={25}
          rowsPerPageOptions={[25]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getRowId={(row) => row.id}
        />
      </Box>
    </div>
  );
}

export default SalesRecord;
