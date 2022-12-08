import "./DishCategories.css";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import {
    getDishesCategoriesRequest,
    updateDishCategoryRequest,
    deleteDishCategoryRequest,
} from "../../api/dishesCategories.api";

function DishCategories() {
    const [seed, setSeed] = useState(0);
    const [dishCategories, setDishCategories] = useState([]);

    useEffect(() => {
        getDishesCategoriesRequest().then((response) => {
            setDishCategories(response.data);
        });
    }, []);

    useEffect(() => {
        getDishesCategoriesRequest().then((response) => {
            setDishCategories(response.data);
        });
    }, [seed]);

    const deleteHandler = (dishCategory) => {
        deleteDishCategoryRequest(dishCategory.id).then((response) => {
            setSeed(seed + 1);
        });
    };

    const updateHandler = (dishCategory) => {
        const newDishCategoryUpdate = {
            name: dishCategory.name,
        };
        updateDishCategoryRequest(dishCategory.id,newDishCategoryUpdate).then((response) => {
            setSeed(seed + 1);
        });
    };

  const columns = [
    { field: "id", headerName: "ID", width: 50, editable: false },
    { field: "name", headerName: "Nombre", width: 250, editable: true },
    {
      field: "delete",
      headerName: "Eliminar",
      width: 150,
      renderCell: (params) => (
        <button onClick={() => deleteHandler(params.row)}>Eliminar</button>
      ),
    },
    {
      field: "update",
      headerName: "Editar",
      width: 150,
      renderCell: (params) => (
        <button onClick={() => updateHandler(params.row)}>Editar</button>
      ),
    },
  ];
  return (
    <div className="dish-category-manager-container">
        <h1 className="dish-category-manager-title">Gestionar categorias de plato</h1>
      <Box
        className="dish-category-manager-box"
        sx={{ height: 400, width: "80%" }}
        key={seed}
      >
        <DataGrid
          className="dish-category-table"
          rows={dishCategories}
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

export default DishCategories;
