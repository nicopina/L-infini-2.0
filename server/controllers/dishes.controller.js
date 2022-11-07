import { promisePool } from "../db.js";

export const getDish = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM dishes WHERE id = ?",
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

export const getDishes = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Dishes");
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createDish = async (req, res) => {
  try {
    console.log(req.body);
    const [result] = await promisePool.query("INSERT INTO Dishes SET ?", [
      req.body,
    ]);
    return res.json({ message: "Dish saved" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateDish = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "UPDATE Dishes SET ? WHERE id = ?",
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

export const deleteDish = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "DELETE FROM Dishes WHERE id = ?",
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
