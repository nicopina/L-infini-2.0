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

    //Añade los . a los miles
    function formateo_dinero(dinero) {
        return dinero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    ////Color haitiano: forest green
    var backgroundColor = [];
    for (var i = 0; i < labels.length; i++) {
        backgroundColor.push("rgba(34, 139, 34, 0.2)");
    }

    //Color: forest green mas oscuro
    var borderColor = [];
    
    for (var i = 0; i < labels.length; i++) {
        borderColor.push("rgba(34, 139, 34, 1)");     
    }

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Ingreso diario en el mes actual',
                data: datos,
                backgroundColor:  backgroundColor,
                borderColor: borderColor,
                borderWidth: 1,
            },
        ],
    };
    


    var options = {
        responsive: true,
        scales: {
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Ingresos por día',
                    size: 40
                },
                //ticks van con %
                ticks: {
                    callback: function (value, index, values) {
                        return "$"+formateo_dinero(value);
                    }
                }
            },
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Día del mes'
                }
            }
        }
    };

    return (
        <div>
            <Bar data={data} 
                options={options}
            />
        </div>
    );

}
export default SalesMonthChart;

