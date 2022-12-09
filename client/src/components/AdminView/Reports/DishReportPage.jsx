import TopNLeastSelled from "./TopNLeastSelled";
import TopNMostSelled from "./TopNMostSelled";
import React from "react";
import DishMostSelledTimeRange from "./DishMostSelledTimeRange";

function DishReportPage() {
  //Defaul values

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  var hoy = new Date();

  const [number, setNumber] = React.useState(5);
  const [number_2, setNumber_2] = React.useState(5);

  const [fechas, setFechas] = React.useState({
    fecha_inicial: new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      hoy.getDate() - 5,
      0,
      0,
      0,
      0
    ),
    fecha_final: new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      hoy.getDate(),
      0,
      0,
      0,
      0
    ),
  });

  return (
    <div>
      <h1>Reporte de los platos</h1>

      <TopNMostSelled number={[number, setNumber]} />
      <TopNLeastSelled number_2={[number_2, setNumber_2]} />
      <DishMostSelledTimeRange fechas={fechas} />
    </div>
  );
}

export default DishReportPage;
