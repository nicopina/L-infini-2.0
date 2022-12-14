import React from "react";
import SalesDaily from "./SalesDaily";
import SalesActualMonth from "./SalesActualMonth";
import SalesOfSelectedDay from "./SalesOfSelectedDay";

import {
  getProfitToday,
  getProfitEntireMonth,
  getProfitByOneDate,
} from "../../../api/orderItems.api";
import {
  getCountOrdersToday,
  getCountOrdersMonth,
  getCountOrdersOneFullDate,
} from "../../../api/orders.api";
import BusyHoursReport from "./BusyHoursReport";
import SalesMonthChart from "./SalesMonthChart";


function SalesReportPage() {


  //Default values
  var [fecha, setFecha] = React.useState(new Date());

  var fecha_ms = fecha.getTime() + (fecha.getTimezoneOffset() * 60000);

  var [profitToday, setProfitToday] = React.useState(0);



  var profitToday = 0;
  getProfitToday().then((response) => {
    profitToday = response.data[0].profit;
  });

  var profitEntireMonth = 0;
  getProfitEntireMonth().then((response) => {
    profitEntireMonth = response.data[0].profit;
  });

  var countOrdersToday = 0;
  getCountOrdersToday().then((response) => {
    countOrdersToday = response.data;
  });

  var countOrdersMonth = 0;
  getCountOrdersMonth().then((response) => {
    countOrdersMonth = response.data;
  });

  var dayProfit = 0;
  getProfitByOneDate(fecha_ms).then((response) => {
    dayProfit = response.data[0].profit;
  });

 
  
  var countOrderItemsDay = 0;
  getCountOrdersOneFullDate(fecha.getTime()).then((response) => {
    countOrderItemsDay = response.data;
    
  })

  return (
    <div>
      <h1>Reporte de Ventas</h1>
      <SalesDaily
        profitToday={profitToday}
        countOrderItemsToday={countOrdersToday}
        fecha = {fecha}
      />
      <SalesActualMonth
        profitEntireMonth={profitEntireMonth}
        countOrdersMonth={countOrdersMonth}
      />
      <SalesOfSelectedDay 
        fecha = {fecha}
        dayProfit = {dayProfit}
        countOrderItemsDay ={countOrderItemsDay}
      />

      
    </div>
    
  );
}

export default SalesReportPage;
