import React, { useEffect, useState } from "react";
import { getProfitToday } from "../../../api/orderItems.api";
import { Card, CardHeader, CardTitle, CardBody,CardImg } from "reactstrap";
import { getCountOrdersToday, getCountOrdersOneFullDate } from "../../../api/orders.api";


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

  var formatedProfitToday = profitToday? profitToday.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 0;;
  
  var formatedAverageProfitToday = countOrdersToday ? parseInt(profitToday/countOrdersToday).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 0;
  var formatedCountOrdersToday = countOrdersToday ? parseInt(countOrdersToday).toString() : 0;


  return (
    <div >
      <Card color="secondary" outline >
      <CardImg
                    alt="Card image cap"
                    src="https://kottke.org/plus/misc/images/calendar-dates-week.jpeg"
                    style={{
                        height: 450,
                        opacity: 0.7,
                    }}
                    top
                    width="100%"
                />
        <CardHeader>
          <CardTitle tag="h4" style={{textAlign:'center',fontFamily:'Cursive'}}>
            Reporte de Ventas del día de hoy {formatearFecha(new Date())}
          </CardTitle>
        </CardHeader>
        <CardBody style={{textAlign:'center',fontFamily:'Cursive'}}>
          <h3 >Total de ventas del día de hoy: ${formatedProfitToday}</h3>
           <h3 >Total de pedidos realizados hoy: {formatedCountOrdersToday}</h3>
           <h3 >Promedio de ventas por pedido hoy: ${formatedAverageProfitToday}</h3>
        </CardBody>
      </Card>
    </div>
  );
}

export default SalesDaily;
