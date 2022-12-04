import React, { useEffect, useState } from "react";
import { getProfitToday } from "../../../api/orderItems.api";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import { getCountOrdersToday } from "../../../api/orders.api";

function SalesDaily(params) {
  const [profitToday, setProfitToday] = useState(params.profitToday);
  const [countOrdersToday, setCountOrderItemsToday] = useState(params.countOrdersToday);

  useEffect(() => {
    getProfitToday().then((response) => {
      setProfitToday(response.data[0].profit);
    });
  }, []);

  useEffect(() => {
    getCountOrdersToday().then((response) => {
        setCountOrderItemsToday(response.data);
    });
    }, []);


  function formatearFecha(fecha) {
    // Formato de fecha: dd/mm/yyyy
    var dd = fecha.getDate();
    var mm = fecha.getMonth() + 1;
    var yyyy = fecha.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    return dd + "/" + mm + "/" + yyyy;
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">
            Reporte de Ventas del día de hoy {formatearFecha(new Date())}
          </CardTitle>
        </CardHeader>
        <CardBody>
          <h2>El total de ventas del día de hoy es de: ${profitToday}</h2>
           <h2>El total de pedidos realizados hoy es de: {countOrdersToday}</h2>
           <h2>El promedio de ventas por pedido es de: ${parseInt(profitToday/countOrdersToday)}</h2>
        </CardBody>
      </Card>
    </div>
  );
}

export default SalesDaily;
