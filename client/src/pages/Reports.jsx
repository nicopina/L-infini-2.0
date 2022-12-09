import { Button,Card,CardBody,CardTitle,CardSubtitle,CardText,CardImg } from "reactstrap";
import "./Reports.css";

function Reports(){
    return (
        <>
        <div>
            <Card className="my-2">
                 <CardImg
                        alt="Card image cap"
                        src="https://astelus.com/wp-content/viajes/platos-mas-importantes-alrededor-del-mundo.jpg"
                        style={{
                            height: 250,opacity: 0.7
                        }}
                        top
                        width="100%"
                        />
                        <CardBody className="cardbodyc">
                        <CardTitle tag="h5">
                            Reporte de Platos
                        </CardTitle>
                        <CardText>
                            Aquí se muestran los reportes de los platos más vendidos y los menos vendidos.
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
                            height: 250,opacity: 0.7
                        }}
                        top
                        width="100%"
                        />
                        <CardBody className="cardbodyc">
                        <CardTitle tag="h5">
                            Reporte de Ventas
                        </CardTitle>
                        <CardText>
                            Aquí se muestran los reportes de las ventas realizadas.
                        </CardText>
                        <Button  className="buttonpad" color="success" size='lg' href={`/reportes/ventas`}>Reporte de Ventas</Button>
                        </CardBody>
                    </Card>
            </div>  

            <div>
            <Card className="my-2">
                 <CardImg
                        alt="Card image cap"
                        src="https://img.besthqwallpapers.com/Uploads/11-4-2020/128534/finance-concepts-charts-background-with-graphs-stock-exchanges-money.jpg"
                        style={{
                            height: 250,opacity: 0.7
                        }}
                        top
                        width="100%"
                        />
                        <CardBody className="cardbodyc">
                        <CardTitle tag="h5">
                            Gráficos
                        </CardTitle>
                        <CardText>
                            Aquí hay gráficos con información útil para tu restaurant.
                        </CardText>
                        <Button  className="buttonpad" color="warning" size='lg' href={`/reportes/graficos`}>Reporte de Gráficos</Button>
                        </CardBody>
                    </Card>
            </div>    

            <div>
            <Card className="my-2">
                 <CardImg
                        alt="Card image cap"
                        src="https://d29jy8ovkd5kcx.cloudfront.net/wp-content/uploads/2021/11/29093133/092.jpg"
                        style={{
                            height: 250,opacity: 0.7
                        }}
                        top
                        width="100%"
                        />
                        <CardBody className="cardbodyc">
                        <CardTitle tag="h5">
                            Descargas
                        </CardTitle>
                        <CardText>
                            Aquí puedes descargar información general para realizar análisis.
                        </CardText>
                        <Button  className="buttonpad" color="info" size='lg' href={`/reportes/descargas`}>Descargas</Button>
                        </CardBody>
                    </Card>
            </div>          
            
        </>
    )
}

export default Reports;