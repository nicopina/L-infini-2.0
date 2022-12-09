import React from "react";
import BusyHoursReport from "./BusyHoursReport";
import SalesMonthChart from "./SalesMonthChart";
import { Card, Container } from "reactstrap";
function ChartsPage() {
  function beforePrintHandler() {
    for (let id in Chart.instances) {
      Chart.instances[id].resize(10, 10);
      console.log(Chart.instances[id]);
    }
  }

  //Container usa todo el espacio lateral
  return (
    <Container
        fluid
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minWidth: "100%",
      }}
    >
      <div
        style={{
            width: "90%",
            }}
      >
        <h2 style={{ margin: "100px 0 0 0", textAlign: "center", color: "black" }}>Gráficos</h2>

        <div>
          <Card
            style={{
              width: "100%",
              height: "70%",
              margin: "5px 0 0 0",
            }}
          >
            <BusyHoursReport />
          </Card>
        </div>
        <div>
          <Card
            style={{
              width: "100%",
              height: "70%",
              margin: "5px 0 0 0",
            }}
          >
            <SalesMonthChart />
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default ChartsPage;
