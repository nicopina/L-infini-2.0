import React from "react";
import SalesDaily from "./SalesDaily";
import SalesActualMonth from "./SalesActualMonth";

import { getProfitToday, getProfitEntireMonth } from "../../../api/orderItems.api";
import { getCountOrdersToday } from "../../../api/orders.api";

function SalesReportPage() {
  //Default values
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

  return (
    <div>
      <h1>Reporte de Ventas</h1>
      <SalesDaily profitToday={profitToday} countOrderItemsToday={countOrdersToday}/>
      <SalesActualMonth profitEntireMonth={profitEntireMonth} />
    </div>
  );
}

export default SalesReportPage;
