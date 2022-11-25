
import { BASE_URL } from "../config";
import { Button } from "reactstrap";

function Reports(){
    return (
        <div>
            <h1>Reportes</h1>
            <Button color="primary" href={`/reportes/diario`}>Reporte Diario</Button>
        </div>

    )
}

export default Reports;