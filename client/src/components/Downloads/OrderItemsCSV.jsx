import React from "react";
import {createDownloadOrderItemsCSV} from "../../api/downloads.api";

function OrderItemsCSV(params) {

    var exportCSVFile = params.exportCSVFile;
    var convertToCSV = params.convertToCSV;

    const downloadOrderItemsCSV = async () => {
        const { data } = await createDownloadOrderItemsCSV();
        exportCSVFile (data.headers, data.rows, "order-items");
    };

  return (
    <div>
        <button onClick={downloadOrderItemsCSV}>Descargar CSV Detalle de Pedidos</button>
    </div>
  );
}

export default OrderItemsCSV;