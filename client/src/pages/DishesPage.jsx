import { useState , useEffect } from "react";
import { getDishesRequest, getDishRequest , updateDishRequest} from "../api/dishes.api";

function DishesPage() {
  const [dishes, setDishes] = useState([]);
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    getDishesRequest().then((response) => {
      setDishes(response.data);
    });
  }, []);

  const changeState = (dish) => {
    dish.is_active = !dish.is_active;
    updateDishRequest(dish.id, dish).then((response) => {
      setSeed(seed + 1);
    });
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
