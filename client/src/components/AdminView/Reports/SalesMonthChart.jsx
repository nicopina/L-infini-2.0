import React, {useState, useEffect} from 'react';
import {getDailyIncomeMonth} from '../../../api/orders.api';
import {Bar} from 'react-chartjs-2';

function SalesMonthChart(){

    var cantidad_dias_mes_actual = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();

    const [dailyIncome, setDailyIncome] = useState([]);

    var labels = [];
    var datos = [];
    //Rellenar labels con los dias
    for (var i = 1; i <= cantidad_dias_mes_actual; i++) {
        labels.push(i);
        datos.push(0);
    }

    //Rellenar datos cona la infor de dailyIncome
    for (var i = 0; i < cantidad_dias_mes_actual; i++) {
        for (var j = 0; j < dailyIncome.length; j++) {
            if (dailyIncome[j].Dia == i + 1) {
                datos[i] = dailyIncome[j].Ingreso;
            }
        }
    }

    useEffect(() => {
        getDailyIncomeMonth().then((response) => {
            setDailyIncome(response.data);
        });
    }
    , []);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Ingreso diario en el mes actual',
                data: datos,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <Bar data={data} />
        </div>
    );

}
export default SalesMonthChart;

