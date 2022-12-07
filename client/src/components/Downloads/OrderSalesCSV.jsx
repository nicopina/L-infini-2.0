import React from "react";
import {createDownloadOrdersProfitCSV} from "../../api/downloads.api";

function OrderSalesCSV(params) {

  var exportCSVFile = params.exportCSVFile;
  var convertToCSV = params.convertToCSV;

  const downloadOrdersProfitCSV = async () => {
    const { data } = await createDownloadOrdersProfitCSV();
    exportCSVFile (data.headers, data.rows, "orders-profit");
};

  return (
    <div>
        <button onClick={downloadOrdersProfitCSV}>Descargar CSV Resumen de Pedidos</button>
    </div>
    );

}

export default OrderSalesCSV;