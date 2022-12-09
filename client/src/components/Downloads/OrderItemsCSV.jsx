import React from "react";
import { createDownloadOrderItemsCSV } from "../../api/downloads.api";
import { Button } from "reactstrap";
function OrderItemsCSV(params) {
  var exportCSVFile = params.exportCSVFile;
  var convertToCSV = params.convertToCSV;

  const downloadOrderItemsCSV = async () => {
    const { data } = await createDownloadOrderItemsCSV();
    exportCSVFile(data.headers, data.rows, "pedidos_detalle");
  };

  return (
    <div>
      <Button color="success" onClick={downloadOrderItemsCSV}>
        Descargar CSV Detalle de Pedidos
      </Button>
    </div>
  );
}

export default OrderItemsCSV;
