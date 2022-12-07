import React, {useState, useEffect} from 'react';
import {getProfitEntireMonth} from '../../../api/orderItems.api';
import {Card, CardHeader, CardTitle, CardBody,CardImg} from 'reactstrap';
import {getCountOrdersMonth} from '../../../api/orders.api';
import SalesLastMonth from './SalesLastMonth';

function SalesActualMonth(params){

    const [profitEntireMonth, setProfitEntireMonth] = useState(params.profitEntireMonth);
    const [countOrdersMonth, setCountOrdersMonth] = useState(params.countOrdersMonth);


    useEffect(() => {
        getProfitEntireMonth().then((response) => {
            setProfitEntireMonth(response.data[0].profit);
        });
    }, []);

    useEffect(() => {
        getCountOrdersMonth().then((response) => {
            setCountOrdersMonth(response.data);
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

    var formatedProfit = profitEntireMonth ? profitEntireMonth.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 0;
    var formatedCountOrdersMonth = countOrdersMonth ? countOrdersMonth.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 0;
    var formatedAverageProfit = countOrdersMonth ? parseInt(profitEntireMonth/countOrdersMonth).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : 0;

    return(
        <div>
            <Card>
            <CardImg
                    alt="Card image cap"
                    src="https://visme.co/blog/wp-content/uploads/2019/11/Header-9.jpg"
                    style={{
                        height: 450,
                        opacity: 0.7,
                    }}
                    top
                    width="100%"
                />
                <CardHeader>
                    <CardTitle tag="h3" style={{textAlign:'center',fontFamily:'Cursive'}}>
                        Reporte de Ventas del mes de {obtenerMesTexto()}
                    </CardTitle>
                </CardHeader>
                <CardBody style={{textAlign:'center',fontFamily:'Cursive'}}>
                    <h3 style={{fontFamily:'Cursive'}}>Total de ventas del mes actual: ${formatedProfit}</h3>
                    <h3 style={{fontFamily:'Cursive'}}>Total de pedidos realizados en el mes actual: {formatedCountOrdersMonth}</h3>
                    <h3 style={{fontFamily:'Cursive'}}>Promedio de ventas por pedido en el mes actual: ${formatedAverageProfit}</h3>

                    {/* <SalesLastMonth/> */}
                    
 
                </CardBody>
            </Card>
        </div>
    )
//     <div>
//     <Card>
//         <CardHeader>
//             <CardTitle tag="h4">
//                 Reporte de Ventas del mes de {obtenerMesTexto()}
//             </CardTitle>
//         </CardHeader>
//         <CardBody>
//             <h2>Total de ventas del mes actual: ${formatedProfit}</h2>
//             <h2>Total de pedidos realizados en el mes actual: {formatedCountOrdersMonth}</h2>
//             <h2>Promedio de ventas por pedido en el mes actual: ${formatedAverageProfit}</h2>

//             <SalesLastMonth/>
            

//         </CardBody>
//     </Card>
// </div>
}

export default SalesActualMonth;