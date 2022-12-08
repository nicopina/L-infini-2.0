import { useState, useEffect } from "react";
import { getDishesCategoriesRequest } from "../../api/dishesCategories.api";

import { updateDishRequest } from "../../api/dishes.api";

function CategoryOption(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getDishesCategoriesRequest().then((response) => {
      setCategories(response.data);
    });
  }, []);

  const categoryHandler = (dish, event) => {
    const newDishUpdate = {
      category: parseInt(event.target.value),
    };
    updateDishRequest(dish.id, newDishUpdate).then((response) => {
        props.setSeed(props.seed + 1);
    });
  };

  return (
    <div>
      <select
        value={props.params.row.category}
        onChange={(e) => categoryHandler(props.params.row, e)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryOption;
