import { Card } from "@mui/material";
import { createTableRequest } from "../../api/tables.api";
import "./NewTableForm.css";

function NewTableForm(params) {
  async function handleAddTable(event) {
    event.preventDefault();
    const newTable = {
      id: event.target.id.value,
    };
    createTableRequest(newTable).then((response) => {
      params.setSeed(Math.random());
    });
  }

  return (
    <Card className="new-table-card">
      <form onSubmit={handleAddTable} className="new-table-form">
        <div className="new-table-input-container">
          <label className="new-table-label">ID</label>
          <input type="text" name="id" required maxLength={6} />
        </div>
        <button className="button" type="submit">
          Agrega mesa
        </button>
      </form>
    </Card>
  );
}

export default NewTableForm;
