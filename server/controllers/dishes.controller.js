import { promisePool } from "../db.js";

export const getDish = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Dishes WHERE id = ?",
      [req.params.id]
    );
    if (rows.length > 0) {
      res.json(rows[0]);
    }
    res.status(404).json({ message: "Dish not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getDishes = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Dishes");
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createDish = async (req, res) => {
  try {
    console.log(req.body);
    const [result] = await promisePool.query("INSERT INTO Dishes SET ?", [
      req.body,
    ]);
    res.json({ message: "Dish saved" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateDish = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "UPDATE Dishes SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Dish updated" });
    }
    res.status(404).json({ message: "Dish not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteDish = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "DELETE FROM Dishes WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Dish deleted" });
    }
    res.status(404).json({ message: "Dish not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
