import React from "react";

import OrderItemsCSV from "../../Downloads/OrderItemsCSV";
import OrderSalesCSV from "../../Downloads/OrderSalesCSV";

function DownloadsPage() {

  const exportCSVFile = function (headers, items, fileName) {
    if (headers) {
      items.unshift(headers);
    }
    const jsonObject = JSON.stringify(items);
    const csv = convertToCSV(jsonObject);
    const exportName = fileName + ".csv" || "export.csv";
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, exportName);
    } else {
      const link = document.createElement("a");
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", exportName);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  const convertToCSV = function (objArray) {
    const array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    let str = "";
    for (let i = 0; i < array.length; i++) {
      let line = "";
      for (let index in array[i]) {
        if (line != "") line += ",";
        line += array[i][index];
      }
      str += line + "\r\n";
    }
    return str;
  };

  return (
    <div>
      <h1>Descargas</h1>
      <OrderSalesCSV
        exportCSVFile={exportCSVFile}
        convertToCSV={convertToCSV}
      />
      <OrderItemsCSV
        exportCSVFile={exportCSVFile}
        convertToCSV={convertToCSV}
        />
      
    </div>
  );
}

export default DownloadsPage;
