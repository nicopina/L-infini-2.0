import { promisePool } from "../db.js";

export const getRequests = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Tables_Requests ORDER BY status ASC, id ASC");
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getRequest = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Tables_Requests WHERE id = ?",
      [req.params.id]
    );
    if (rows.length > 0) {
      res.json(rows[0]);
    }
    res.status(404).json({ message: "Request not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createRequest = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "INSERT INTO Tables_Requests SET ?",
      [req.body]
    );
    res.json({ message: "Request saved" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateRequest = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "UPDATE Tables_Requests SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Request updated" });
    }
    res.status(404).json({ message: "Request not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteRequest = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "DELETE FROM Tables_Requests WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Request deleted" });
    }
    res.status(404).json({ message: "Request not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
