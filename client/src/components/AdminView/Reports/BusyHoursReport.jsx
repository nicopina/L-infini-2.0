
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

    React.useEffect(() => {
        getItemsSoldByHour().then((response) => {
            setBusyHours(response.data);
            console.log(response.data);
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
                    console.log(item2.quantity);
                    datos.push(item2.quantity);
                    found = true;
                    break;
                }
            }
            if (!found) {
                datos.push(0);
            }
        }

        var backgroundColor = [];
        //Todas azul oscuro
        for (var i = 0; i < labels.length; i++) {
            backgroundColor.push("rgba(0, 0, 255, 0.5)");
        }

        var data = {

            labels: labels,
            datasets: [
                {
                    label: "Cantidad de platos pedidos",
                    backgroundColor: backgroundColor,
                    data: datos
                }
            ]
        };


    return (
    
        <div>
            <h1>Reporte de Horas de Mayor Concurrencia</h1>
            <Bar data={data} />
        </div>
    );

}

export default BusyHoursReport;