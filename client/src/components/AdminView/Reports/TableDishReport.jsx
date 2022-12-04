import React from "react";
import { Table } from "reactstrap";

function TableDishReport(params) {
  const top = params.top;
  var cont = 1;
  return (
    <div>
      <Table responsive bordered striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre del Plato</th>
            <th>Cantidad vendida</th>
          </tr>
        </thead>
        <tbody>
          {top?.map((item) => (
            <tr key={item.dish_id}>
              <td>{cont++}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableDishReport;
