
import { BASE_URL } from "../config";
import { Button } from "reactstrap";

function Reports(){
    return (
        <div>
            <h1>Reportes</h1>
            <Button color="primary" href={`/reportes/platos`}>Reporte de Platos</Button>

            <Button color="primary" href={`/reportes/mesas`}>Reporte de Mesas</Button>

            <Button color="primary" href={`/reportes/ventas`}>Reporte de Ventas</Button>
        </div>

    )
}

export default Reports;