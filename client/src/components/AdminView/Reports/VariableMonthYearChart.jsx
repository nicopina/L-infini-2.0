import React, { Component } from 'react';

import {getProfitByAllDates} from '../../../api/orderItems.api';

import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";

  //Por favor no cuestionar el código, es un desastre, pero funciona, y no tengo tiempo para arreglarlo.
  //Lo hice a las 4 de la mañana. 
function VariableMonthYearChart(){

    function formateo_dinero(dinero) {
        return dinero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function getDaysOfTheMonth() {
        var days = [];

        for (var i = 1; i <= 31; i++) {
            days.push({ day: i, value: 0 });
        }

        return days;

    }


    var [datos, setDatos] = React.useState([]);

    React.useEffect(() => {
        getProfitByAllDates().then((response) => {
            setDatos(response.data);
        });
    }, []);

    var data_global = [];
    var labels = [];
    var valores = [];


    for (var i = 0; i < datos.length; i++) {
        var combinacion = datos[i].month + "/" + datos[i].year;

        if (!labels.includes(combinacion)) {
            labels.push(combinacion);
            var dias_mes_valor = getDaysOfTheMonth(datos[i].month, datos[i].year);
            valores.push(dias_mes_valor);
            data_global.push({ label: combinacion, data: dias_mes_valor });
        } 

        for (var j = 0; j < data_global.length; j++) {
            console.log(datos[i].profit);
            if (data_global[j].label == combinacion) {

                for (var k = 0; k < data_global[j].data.length; k++) {

                    if (parseInt(data_global[j].data[k].day) == parseInt(datos[i].day)) {

                        data_global[j].data[k].value = datos[i].profit;
                        //agrega a valores -> dias_mes_valor
                        valores[j][k].value = datos[i].profit;
                    }
                }
            }
        }

        console.log(data_global);
    }

    var labels2 = [];
    for (var i = 1; i <= 31; i++) {
        labels2.push(i);
    }

    var datos_simples = [];

    for (var i = 0; i < valores.length; i++) {
        var arreglo = [];
        for (var j = 0; j < valores[i].length; j++) {
            arreglo.push(valores[i][j].value);
        }
        datos_simples.push(arreglo);
    }
    console.log(datos_simples);


    var datasets = [];
    for (var i = 0; i < datos_simples.length; i++) {
        var color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        datasets.push({
            label: labels[i],
            data: datos_simples[i],
            backgroundColor: color,
            borderColor: color,
            borderWidth: 1,
        });
    }

    var data = {
        labels: labels2,
        datasets: datasets,
    };

    var options = {
        scales: {
            y: {
                display: true,
                title: {
                    display: true,
                    text: "Ingresos por día",
            
                },
                ticks: {
                    callback: function (value, index, values) {
                        return "$" + formateo_dinero(value);
                    },
                },
            },
            x: {
                display: true,
                title: {
                    display: true,
                    text: "Días del mes",
                },
            },
        },
    };

    return (
        <div style={{ width: "90%", height: "90%" }}>
        <h3 style={{ color: "black", textAlign: "center" }}>
        Reporte de Ventas Diarias por Mes
        </h3>
            <Bar data={data}
                options={options}
             />
        </div>
    );

}

export default VariableMonthYearChart;