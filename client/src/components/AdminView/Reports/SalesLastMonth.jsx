import React from 'react';
import {getProfitByDateRange} from '../../../api/orderItems.api';


function SalesLastMonth(){

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
       

    console.log("Inicio: " + first_day_last_month, "Fin: " + final_date);


    return(
        <div>
            <h1>Ultimo mes</h1>
            ${profit}
            
        </div>
    );

}

export default SalesLastMonth;