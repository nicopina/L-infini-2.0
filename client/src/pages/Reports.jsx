
import { BASE_URL } from "../config";
import { Button,Card,CardBody,CardTitle,CardSubtitle,CardText } from "reactstrap";
import "./Reports.css";
function Reports(){
    return (
        <>
        <Card style={{ width: '18rem'}} className='centrado'>
            <img
                alt="Sample"
                src="https://aggregate.digital/v3_images/features/ta_icon_reports.svg"
            />
            <CardBody>
                <CardTitle tag="h5">
                    Reportes
                </CardTitle>
                <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                >
                Informacion de interes
                </CardSubtitle>
                <CardText>
                    Aqui podras encontrar informacion de interes sobre los pedidos, productos y clientes.
                </CardText>
                <Button  color="primary" size='lg' href={`/reportes/platos`}>Reporte de Platos</Button>
                <Button  color="primary" size='lg' href={`/reportes/ventas`}>Reporte de Ventas</Button>

            </CardBody>
            </Card>
        </>
    )
}
/* <div className="container">
<h1>Reportes</h1>
</div>
<div className="centrado">
<Button className="" color="primary" size='lg' href={`/reportes/platos`}>Reporte de Platos</Button>
</div>
<div className="centrado">
<Button color="primary" size='lg' href={`/reportes/ventas`}>Reporte de Ventas</Button>
</div> */

export default Reports;