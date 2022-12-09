import React, { useEffect } from "react";
import { Card, CardHeader, CardTitle, CardBody, Form, Input,CardImg} from "reactstrap";
import { getProfitByOneDate } from "../../../api/orderItems.api";
import {getCountOrdersOneFullDate} from "../../../api/orders.api";



function SalesOfSelectedDay(params) {


    const [fecha, setFecha] = React.useState(params.fecha);
    const [dayProfit, setDayProfit] = React.useState(params.dayProfit);
    const [countOrdersDay, setCountOrdersDay] = React.useState(params.countOrdersDay);

    
    useEffect(() => {
        const fecha_ms = fecha.getTime();

        getProfitByOneDate(fecha_ms + (fecha.getTimezoneOffset() * 60000)
            ).then((response) => {
                setDayProfit(response.data[0].profit);
            });

        
        getCountOrdersOneFullDate(fecha_ms + (fecha.getTimezoneOffset() * 60000)
            ).then((response) => {

            setCountOrdersDay(response.data);
        });
        
    }, [fecha]);


    function handlerFechaChange(event){
        var val = event.target.value;
        var aux = new Date(val);
        aux = aux.getTime() + (aux.getTimezoneOffset() * 60000);
        var fix = new Date(aux);

        setFecha(new Date(fix));
        
    }

    function formatear(fecha) {
        //yyyy-MM-dd
        var dia = fecha.getDate();
        var mes = fecha.getMonth()+1;
        var anio = fecha.getFullYear();
        if (dia < 10) {
          dia = "0" + dia;
        }
        var fecha_formateada = anio + "-" + mes + "-" + dia;
        
        return fecha_formateada;
      }

      function formatear_dinero(dinero){
        if (dinero == null){
          return 0;
        }
        var dinero_formateado = parseInt(dinero).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return dinero_formateado;
      }

      function calcular_formatear_promedio(dinero, cantidad){
        if (cantidad == 0){
          return 0;
        }
        var promedio = dinero/cantidad;
        var promedio_formateado = parseInt(promedio).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return promedio_formateado;
      }

      

      
  return (
    <div>
      <Card className="card-chart">
      <CardImg
                    alt="Card image cap"
                    src="https://images4.alphacoders.com/201/201716.jpg"
                    style={{
                        height: 250,
                        opacity: 0.7,
                    }}
                    top
                    width="100%"
                />
        <CardHeader>
          
          <CardTitle tag="h5" style={{textAlign:'center'}}>
            Reporte de Ventas de un día seleccionado
          </CardTitle>

          <Form onChange={handlerFechaChange} style={{textAlign:'center'}}>
            <label>Seleccione un día</label>
            <Input
              type="date"
              name="date"
              id="date"
              style={{textAlign:'center'}}
                value={formatear(fecha)}
            />
          </Form>
        </CardHeader>
        <CardBody>
          
            <h4 style={{textAlign:'center',color:'black'}}>Total de ventas del día seleccionado: ${formatear_dinero(dayProfit)}</h4>
            <h4 style={{textAlign:'center',color:'black'}}>Total de pedidos del día seleccionado: {formatear_dinero(countOrdersDay)}</h4>
            <h4 style={{textAlign:'center',color:'black'}}>Promedio de ingresos por pedido: ${calcular_formatear_promedio(dayProfit, countOrdersDay)}</h4>
            

          
        </CardBody>
      </Card>
    </div>
  );
}

export default SalesOfSelectedDay;
