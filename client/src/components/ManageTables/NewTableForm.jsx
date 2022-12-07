import { Card } from "@mui/material";
import { createTableRequest } from "../../api/tables.api";
import "./NewTableForm.css";
import swal from "sweetalert";

function NewTableForm(params) {
  async function handleAddTable(event) {
    event.preventDefault();
    const newTable = {
      id: event.target.id.value,
    };
    try {
      await createTableRequest(newTable).then((response) => {
        swal({
          title: "Mesa agregada",
          text: "La mesa ha sido agregada con éxito",
          icon: "success",
          button: "Aceptar",
        })
        params.setSeed(Math.random());
      })
    } catch (error) {
      swal({
        title: "Error!",
        text: "No se pudo agregar la mesa, verifica la información ingresada.",
        icon: "error",
        button: "Aceptar",
      })
    }
  }

  return (
    <Card className="new-table-card" style={{ width: '600px'}}>
      <form onSubmit={handleAddTable} className="new-table-form">
        <h4 className="new-table-title">Agregar una mesa</h4>
        <div className="new-table-input-container">
          <label className="new-table-label">ID:  </label>
          <input type="text" name="id" required maxLength={6} />

        </div>
        <button className="buttongreen" type="submit">
          Agregar
        </button>
      </form>
    </Card>
  );
}

export default NewTableForm;
