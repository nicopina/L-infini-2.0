
import { BASE_URL } from "../config";
import { Button,Card,CardBody,CardTitle,CardSubtitle,CardText,CardImg } from "reactstrap";
import "./Reports.css";
import { borderRadius } from "@mui/system";
function Reports(){
    return (
        <>
        <div>
            <Card className="my-2">
                 <CardImg
                        alt="Card image cap"
                        src="https://astelus.com/wp-content/viajes/platos-mas-importantes-alrededor-del-mundo.jpg"
                        style={{
                            height: 600,opacity: 0.7
                        }}
                        top
                        width="100%"
                        />
                        <CardBody className="cardbodyc">
                        <CardTitle tag="h5">
                            Reporte de Platos
                        </CardTitle>
                        <CardText>
                            Aqui se muestran los reportes de los platos mas vendidos y los menos vendidos.
                        </CardText>
                        <Button className="buttonpad" color="danger" size='lg' href={`/reportes/platos`}>Reporte de Platos</Button>
                        </CardBody>
                    </Card>
            </div>
            <div>
            <Card className="my-2">
                 <CardImg
                        alt="Card image cap"
                        src="https://administrategia.com/wp-content/uploads/2019/09/reporte_1.jpg"
                        style={{
                            height: 600,opacity: 0.7
                        }}
                        top
                        width="100%"
                        />
                        <CardBody className="cardbodyc">
                        <CardTitle tag="h5">
                            Reporte de Ventas
                        </CardTitle>
                        <CardText>
                            Aqui se muestran los reportes de las ventas realizadas.
                        </CardText>
                        <Button  className="buttonpad" color="success" size='lg' href={`/reportes/ventas`}>Reporte de Ventas</Button>
                        </CardBody>
                    </Card>
            </div>            
            
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