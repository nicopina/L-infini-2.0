import React from "react";

import { getDishCategoriesProfitRequest } from "../../../api/dishesCategories.api";
import { Doughnut, Pie } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'

Chart.register(ArcElement);

function CategoryChart(){

    const [categories, setCategories] = React.useState([]);
    const [labels, setLabels] = React.useState([]);
    const [datos, setDatos] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        getDishCategoriesProfitRequest().then((response) => {
            setCategories(response.data);
        });
        let labels = [];
        let datos = [];
        for (let i = 0; i < categories.length; i++) {
            labels.push(categories[i].category);
            datos.push(categories[i].profit);

        }
        setLabels(labels);
        setDatos(datos);
        console.log(labels);
        console.log(datos);
    }, []);

    var colores = [];

    for (let i = 0; i < categories.length; i++) {
        colores.push("rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ",1)");
    }


    var coloresBordes = [];

    for (let i = 0; i < categories.length; i++) {
        coloresBordes.push("rgba(0,0,0,1)");
    }

    var datos2 = [];
    var labels2 = [];
    for (let i = 0; i < categories.length; i++) {
        datos2.push(categories[i].profit);
        labels2.push(categories[i].category);

    }

    var data = {
        labels: labels2,
        datasets: [
            {
                label: "Ventas por categoría",
                data: datos2,
                backgroundColor: colores,
                borderColor: coloresBordes,
            }
        ]
    };

    
    return (
        <div style={{width: "45%", height: "45%", 
        display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"
        }}
        >
            <h3 style={{color: "black", textAlign:"center"}}>Ingresos por Categoría</h3>
            <Pie data={data} 

            />
            <div>

            </div>
        </div>

    );
        
}

export default CategoryChart;