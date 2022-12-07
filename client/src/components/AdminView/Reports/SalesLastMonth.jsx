import React from 'react';
import { Card } from 'reactstrap';
import {getProfitByDateRange} from '../../../api/orderItems.api';


function SalesLastMonth(params){

    var actualMonthProfit = params.actualMonthProfit;

   //Today
    var actual_date = new Date();

    //Last day of the month
    var last_day_month = new Date(actual_date.getFullYear(), actual_date.getMonth() + 1, 0);
    console.log("Last day month ",last_day_month);

    //Progress of the month
    var month_progress = (actual_date.getDate() / last_day_month.getDate());
    console.log("Month progress ",month_progress);

    //Last day of last month
    var last_day_last_month = new Date(actual_date.getFullYear(), actual_date.getMonth(), 0);
    console.log("Last day last month ",last_day_last_month);

    //First day of last month (FIRST)
    var first_day_last_month = new Date(actual_date.getFullYear(), actual_date.getMonth()-1, 1, 0, 0, 0, 0);
    console.log("First day last month ",first_day_last_month);

    //Equivalent day of last month (LAST)
    var equivalent_day_last_month = Math.round(last_day_last_month.getDate() * month_progress);
    console.log("Equivalent day last month ",equivalent_day_last_month);

    var final_date = new Date(actual_date.getFullYear(), actual_date.getMonth()-1, equivalent_day_last_month, 0, 0, 0, 0);

    const [profit, setProfit] = React.useState(0);
    
    React.useEffect(() => {
        getProfitByDateRange(first_day_last_month.getTime() - (first_day_last_month.getTimezoneOffset() * 60000),  
        final_date.getTime() - (final_date.getTimezoneOffset() * 60000)
        ).then((response) => {
            setProfit(response.data[0].profit);
        });
    }, []);
       

    //Condicionales para frase y colores.
    console.log("Actual month profit ",actualMonthProfit);
    console.log("Mes anterior:  ",profit);
    var diferencia = actualMonthProfit - profit;

    var formatedDiferencia = Math.round(diferencia);
    formatedDiferencia = formatedDiferencia.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    var color = "";
    var color2 = "black";
    if (diferencia > 0){
        //Verde
        var texto2 = "El mes actual ha superado al mes anterior en:";
        var texto = "$ "+formatedDiferencia;
        var color = "green";
    }
    else{
        //Rojo
        var texto2 = "El mes actual ha sido inferior al mes anterior en:";
        var texto = "$ "+formatedDiferencia*-1;
        color = "red";

    }

    return(
        <div>
            <h2 style={{textAlign:'center',fontFamily:'Cursive',color:'black'}} >Comparación a la fecha con el mes anterior</h2>
            <h4 style={{textAlign:'center',fontFamily:'Cursive',color:'black'}} >{texto2}</h4>
            <h4 style={{color: color}}>{texto}</h4>           
        </div>
    );

}

export default SalesLastMonth;