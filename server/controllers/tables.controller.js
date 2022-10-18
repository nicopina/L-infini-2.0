import { promisePool } from "../db.js";

export const getTables = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Tables");
    res.json(rows);
  } catch (error) {
    console.log(error);
  }
};

export const getTable = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Tables WHERE id = ?",
      [req.params.id]
    );
    if (rows.length > 0) {
      res.json(rows[0]);
    }
    res.status(404).json({ message: "Table not found" });
  } catch (error) {
    console.log(error);
  }
};

export const createTable = async (req, res) => {
  try {
    const [result] = await promisePool.query("INSERT INTO Tables SET ?", [
      req.body,
    ]);
    res.json({ message: "Table saved" });
  } catch (error) {
    console.log(error);
  }
};

export const updateTable = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "UPDATE Tables SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    if (result.affectedRows > 0) {
      res.json({ message: "Table updated" });
    }
    res.status(404).json({ message: "Table not found" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTable = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "DELETE FROM Tables WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows > 0) {
      res.json({ message: "Table deleted" });
    }
    res.status(404).json({ message: "Table not found" });
  } catch (error) {
    console.log(error);
  }
};
