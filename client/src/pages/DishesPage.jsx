import { useState } from "react";
import { getDishesRequest, getDishRequest , updateDishRequest} from "../api/dishes.api";

function DishesPage() {
  const [dishes, setDishes] = useState([]);

  async function showDishes() {
    getDishesRequest().then((response) => {
      setDishes(response.data);
    });
  }
  showDishes();

  const changeState = (dish) => {
    dish.is_active = !dish.is_active;
    updateDishRequest(dish.id, dish);
  };

  return (
    <div>
      <h1>Platos</h1>
      <ul>
        {dishes.map((dish, index) => (
          <li key={index}>
            {dish.name}
            <input type="checkbox" checked={dish.is_active} onChange={() => changeState(dish)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DishesPage;
