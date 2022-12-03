import {createTableRequest} from '../../api/tables.api';

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
    <form onSubmit={handleAddTable}>
      <label>
        ID:
        <input type="text" name="id" />
      </label>
      <button type="submit">Add Table</button>
    </form>
  );
}

export default NewTableForm;
