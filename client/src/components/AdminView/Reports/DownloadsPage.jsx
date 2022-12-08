import { maxWidth } from "@mui/system";
import React from "react";
import { Card, CardImg,CardBody,CardTitle,CardText, Button} from "reactstrap";

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
    <>
    <div>
            <Card className="my-2" >
                 <CardImg
                        alt="Card image cap"
                        src="https://cdn.discordapp.com/attachments/1049863590594756638/1050251930573750322/csv.jpg"
                        style={{
                            height: 600,
                            opacity: 0.7,
                            justifyContent: "center",
                        }}
                        top
                        width="100%"
                        />
                        <CardBody className="cardbodyc">
                        <CardTitle tag="h5">
                            Reporte detallado de pedidos
                        </CardTitle>
                        <CardText>
                            Descarga un reporte detallado de los pedidos realizados en la plataforma
                        </CardText>
                        <OrderItemsCSV
                            exportCSVFile={exportCSVFile}
                            convertToCSV={convertToCSV}
                          />
                        </CardBody>
                  </Card>
    </div>
    <div>
            <Card className="my-2" >
                 <CardImg
                        alt="Card image cap"
                        src="https://cdn.discordapp.com/attachments/1049863590594756638/1050251930573750322/csv.jpg"
                        style={{
                            height: 600,
                            opacity: 0.7,
                            justifyContent: "center",
                        }}
                        top
                        width="100%"
                        />
                        <CardBody className="cardbodyc">
                        <CardTitle tag="h5">
                            Resumen de pedidos
                        </CardTitle>
                        <CardText>
                            Descarga un reporte resumido de los pedidos realizados en la plataforma
                        </CardText>
                        <OrderSalesCSV
                            exportCSVFile={exportCSVFile}
                            convertToCSV={convertToCSV}
                          />
                        </CardBody>
                  </Card>
    </div>
    </>
  );
}

export default DownloadsPage;

{/* <OrderItemsCSV
exportCSVFile={exportCSVFile}
convertToCSV={convertToCSV}
/>
      <OrderSalesCSV
      exportCSVFile={exportCSVFile}
      convertToCSV={convertToCSV}
    /> */}