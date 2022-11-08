import { promisePool } from "../db.js";

export const getOrderSummaries = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Orders_sumaries");
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getOrderSummary = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Orders_sumaries WHERE id = ?",
      [req.params.id]
    );
    if (rows.length > 0) {
      res.json(rows[0]);
    }
    res.status(404).json({ message: "Ordersummary not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createOrderSummary = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "INSERT INTO Orders_sumaries SET ?",
      [req.body]
    );
    res.json({ message: "OrderSummary saved" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateOrderSummary = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "UPDATE Orders_sumaries SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Orders_sumaries updated" });
    }
    res.status(404).json({ message: "Orders_sumaries not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteOrderSummary = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "DELETE FROM Orders_sumaries WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows > 0) {
      res.status(200).json({ message: "Orders_sumaries deleted" });
    }
    res.status(404).json({ message: "Orders_sumaries not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
