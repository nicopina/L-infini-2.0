import CategoryOption from "./CategoryOption";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { getDishesRequest , updateDishRequest , deleteDishRequest} from "../../api/dishes.api";
import './ModifyDish.css'

function ModifyDish() {
    const [seed, setSeed] = useState(0);
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        getDishesRequest().then((response) => {
            setDishes(response.data);
        });
    }, []);

    useEffect(() => {
        getDishesRequest().then((response) => {
            setDishes(response.data);
        });
    }, [seed]);

    const deleteHandler = (dish) => {
        deleteDishRequest(dish.id).then((response) => {
            setSeed(seed + 1);
        });
    };

    const updateHandler = (dish) => {
        const newDishUpdate = {
            name: dish.name,
            value: dish.value,
            description: dish.description,
            photo_url: dish.photo_url,
            category: dish.category,
        };
        updateDishRequest(dish.id,newDishUpdate).then((response) => {
            setSeed(seed + 1);
        });
    };

  const columns = [
    { field: "id", headerName: "ID", width: 50, editable: false },
    { field: "name", headerName: "Nombre", width: 250, editable: true },
    { field: "value", headerName: "Valor", width: 100, editable: true },
    {
      field: "description",
      headerName: "Descripcion",
      width: 250,
      editable: true,
    },
    { field: "photo_url", headerName: "Foto url", width: 150, editable: true},
    {
      field: "category",
      headerName: "Categoria",
      width: 250,
      editable: true,
      renderCell: (params) => <CategoryOption params={params}/>,
    },
    {
        field: "delete",
        headerName: "Eliminar",
        width: 150,
        renderCell: (params) => (
          <button onClick={() => deleteHandler(params.row)}>
            Eliminar
          </button>
        ),
      },
      {
        field: "update",
        headerName: "Editar",
        width: 150,
        renderCell: (params) => (
          <button onClick={() => updateHandler(params.row)}>
            Editar
          </button>
        ),
      },
  ];

  return (
    <div className="dish-manager-container">
      <h1 className="dish-manager-title">Modificar platos</h1>
      <Box className="dish-manager-box" sx={{ height: 400, width: "100%" }} key={seed}>
        <DataGrid
          className="dish-table"
          rows={dishes}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getRowId={(row) => row.id}
        />
      </Box>
    </div>
  );
}

export default ModifyDish;
