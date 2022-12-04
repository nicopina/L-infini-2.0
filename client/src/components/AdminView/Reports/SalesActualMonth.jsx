import React, {useState, useEffect} from 'react';
import {getProfitEntireMonth} from '../../../api/orderItems.api';
import {Card, CardHeader, CardTitle, CardBody} from 'reactstrap';

function SalesActualMonth(params){

    const [profitEntireMonth, setProfitEntireMonth] = useState(params.profitEntireMonth);

    useEffect(() => {
        getProfitEntireMonth().then((response) => {
            setProfitEntireMonth(response.data[0].profit);
        });
    }, []);

    function obtenerMesTexto(){
        var mes = new Date().getMonth();
        switch(mes){
            case 0:
                return "Enero";
            case 1:
                return "Febrero";
            case 2:
                return "Marzo";
            case 3:
                return "Abril";
            case 4:
                return "Mayo";
            case 5:
                return "Junio";
            case 6:
                return "Julio";
            case 7:
                return "Agosto";
            case 8:
                return "Septiembre";
            case 9:
                return "Octubre";
            case 10:
                return "Noviembre";
            case 11:
                return "Diciembre";
        }
    }

    return(
        <div>
            <Card>
                <CardHeader>
                    <CardTitle tag="h4">
                        Reporte de Ventas del mes de {obtenerMesTexto()}
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <h2>El total de ventas del mes actual es de: ${profitEntireMonth}</h2>
                    
 
                </CardBody>
            </Card>
        </div>
    )
}

export default SalesActualMonth;