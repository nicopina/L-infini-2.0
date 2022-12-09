import { promisePool } from "../db.js";

export const getUsers = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Users");
    return res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Users WHERE rut = ?",
      [req.params.rut]
    );
    if (rows.length > 0) {
      return res.json(rows[0]);
    }
    return res.status(404).json({ message: "User not found" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  try {
    const [result] = await promisePool.query("INSERT INTO Users SET ?", [
      req.body,
    ]);
    return res.json({ message: "User saved" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
