import React from "react";
import {createDownloadOrdersProfitCSV} from "../../api/downloads.api";
import { Button } from "reactstrap";

function OrderSalesCSV(params) {

  var exportCSVFile = params.exportCSVFile;
  var convertToCSV = params.convertToCSV;

  const downloadOrdersProfitCSV = async () => {
    const { data } = await createDownloadOrdersProfitCSV();
    exportCSVFile (data.headers, data.rows, "orders-profit");
};

  return (
    <div>
        <Button color="success" onClick={downloadOrdersProfitCSV}>Descargar CSV Resumen de Pedidos</Button>
    </div>
    );

}

export default OrderSalesCSV;