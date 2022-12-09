
import React from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {getItemsSoldByHour} from '../../../api/orderItems.api';


function formateo_hora(hour) {
    if (hour < 10) {
        return "0" + hour;
    }
    return hour;
}

function BusyHoursReport(){

    Chart.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

    var [busyHours, setBusyHours] = React.useState([]);
    var [totalOrders, setTotalOrders] = React.useState(0);
    
    
    React.useEffect(() => {

        getItemsSoldByHour().then((response) => {
            totalOrders = 0;
            setBusyHours(response.data);
            for (var i = 0; i < response.data.length; i++) {
                totalOrders += parseInt(response.data[i].quantity);
            }
            setTotalOrders(totalOrders);
            
        });

    }
    , []);

        
    var labels = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
    
    var datos = [];
        
    for (var i = 0; i < labels.length; i++) {
        var item = labels[i];
        var found = false;
        for (var j = 0; j < busyHours.length; j++) {
            var item2 = busyHours[j];
            var h = formateo_hora(item2.hour);
            if (item == h) {
                datos.push(parseInt(item2.quantity)*100/totalOrders);
                found = true;
                break;
            }
        }
        if (!found) {
            datos.push(0);
        }
    }
    
    //Color: dark turquoise
    var backgroundColor = [];
    for (var i = 0; i < labels.length; i++) {
        backgroundColor.push("rgba(0, 206, 209, 0.5)");
    }

    var borderColor = [];
    //Color: dark turquoise oscuro
    for (var i = 0; i < labels.length; i++) {
        borderColor.push("rgba(0, 128, 128, 1)");
    }

    var data = {
        labels: labels,
        datasets: [
            {   
                label: "Porcentaje de platos pedidos por hora",
                backgroundColor: backgroundColor,
                data: datos,
                borderColor: borderColor,
                borderWidth: 1,
            }   
        ]
    };

    var options = {
        responsive: true,
        scales: {
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Porcentaje de platos pedidos',
                    size: 40
                },
                ticks: {
                    callback: function (value, index, values) {
                        return value + '%';
                    }
                }
            },
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Hora del día'
                }
            }
        }
    };


    return (
    
        <div>
            <h1>Reporte de Horas de Mayor Concurrencia</h1>
            <Bar data={data}
                options={options}
            />
        </div>
    );

}

export default BusyHoursReport;