import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import React, { useEffect } from "react";
import { getOrderItemsTopBestNByDate } from "../../../api/orderItems.api";
import TableDishReport from "./TableDishReport";

function DishMostSelledTimeRange(params) {
  const [top, setTop] = React.useState([]);

  const [fechas, setFechas] = React.useState(params.fechas);

  useEffect(() => {
    const inicial_seg = fechas.fecha_inicial.getTime();
    const final_seg = fechas.fecha_final.getTime();
    getOrderItemsTopBestNByDate(inicial_seg, final_seg, 10).then((response) => {
      setTop(response.data);
      console.log(response.data);
    });
  }, [fechas]);

  function handlerFechaChange(e) {
    console.log("hola" + e.target.id);
    const ident = e.target.id;
    const val = e.target.value;

    if (ident === "fecha_inicial") {
      setFechas({
        fecha_inicial: new Date(val),
        fecha_final: fechas.fecha_final,
      });
    } else {
      setFechas({
        fecha_inicial: fechas.fecha_inicial,
        fecha_final: new Date(val),
      });
    }
  }

  function formatear(fecha) {
    //yyyy-MM-dd
    var dia = fecha.getDate() + 1;
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getFullYear();
    if (dia < 10) {
      dia = "0" + dia;
    }
    var fecha_formateada = anio + "-" + mes + "-" + dia;

    return fecha_formateada;
  }

  /*
    function verificarFechaAlert(){
        var fecha = document.getElementById("fecha").value;
        var fecha2 = document.getElementById("fecha2").value;
        if(fecha > fecha2){
            alert("La fecha inicial no puede ser mayor a la fecha final");
        }
    }*/

  return (
    <Card key="top5date">
      <CardBody key="body_date">
        <CardHeader>
          <CardTitle>
            Top 10 platos más vendidos en un intervalo de tiempo
          </CardTitle>
          <Form onChange={handlerFechaChange}>
            <label>Fecha inicial</label>
            <input
              type="date"
              name="fecha_inicial"
              id="fecha_inicial"
              value={formatear(fechas.fecha_inicial)}
            />
            <label>Fecha final</label>
            <input
              type="date"
              name="fecha_final"
              id="fecha_final"
              value={formatear(fechas.fecha_final)}
            />
          </Form>
        </CardHeader>
        <TableDishReport top={top} />
      </CardBody>
    </Card>
  );
}

export default DishMostSelledTimeRange;
