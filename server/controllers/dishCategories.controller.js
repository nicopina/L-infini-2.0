import { promisePool } from "../db.js";

/**
 * It queries the database for all the dishes and returns them as a JSON object
 * @param res - The response object.
 * @returns An array of all the dishes in the database.
 */
export const getDishCategories = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM DishCategories");
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
/**
 * It tries to get a dish from the database, and if it succeeds, it returns the dish as JSON, otherwise
 * it returns an error message
 * @param req - The request object containing the id of the dish to get.
 * @param res - The response object containing the dish as JSON or an error message.
 * @returns The dish with the id that is passed in the url.
 */
export const getDishCategory = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM DishCategories WHERE id = ?",
      [req.params.id]
    );
    if (rows.length > 0) {
      return res.json(rows[0]);
    }
    return res.status(404).json({ message: "Dish not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It creates a new dish in the database
 * @param req - The request object that contains the dish to be created.
 * @param res - The response object that contains the created dish.
 * @returns a json object with a message if the dish was created successfully or not.
 */
export const createDishCategories = async (req, res) => {
  try {
    req.body.created_at = new Date();
    req.body.updated_at = new Date();
    const [result] = await promisePool.query(
      "INSERT INTO DishCategories SET ?",
      [req.body]
    );
    return res.json({ message: "Dish saved" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It updates a dish in the database
 * @param req - The request object that contains the dish to be updated.
 * @param res - The response object that contains the updated dish.
 * @returns a json object with a message if the dish was updated, otherwise it returns an error message.
 */
export const updateDishCategories = async (req, res) => {
  try {
    req.body.updated_at = new Date();
    const [result] = await promisePool.query(
      "UPDATE DishCategories SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Dish updated" });
    }
    res.status(404).json({ message: "Dish not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It deletes a dish from the database
 * @param req - The request object that contains the id of the dish to be deleted.
 * @param res - The response object that contains a message that indicates if the dish was deleted or not.
 * @returns a status code and a message that indicates if the dish was deleted or not.
 */
export const deleteDishCategories = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "DELETE FROM DishCategories WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Dish deleted" });
    }
    return res.status(404).json({ message: "Dish not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
