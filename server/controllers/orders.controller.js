import { promisePool } from "../db.js";

export const getOrders = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Orders");
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getOrder = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Orders WHERE id = ?",
      [req.params.id]
    );
    if (rows.length > 0) {
      return res.json(rows[0]);
    }
    return res.status(404).json({ message: "Order not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createOrder = async (req, res) => {
  try {
    const [result] = await promisePool.query("INSERT INTO Orders SET ?", [
      req.body,
    ]);
    return res.json({ message: "Order saved" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "UPDATE Orders SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Order updated" });
    }
    res.status(404).json({ message: "Order not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "DELETE FROM Orders WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Order deleted" });
    }
    return res.status(404).json({ message: "Order not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getOrdersByOrderSummaryId = async (id) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Dishes INNER JOIN Orders ON Dishes.id = Orders.dish_id WHERE Orders.sumary_id = ?",
      [id]
    );
    return rows;
    // return res.status(404).json({ message: "Order not found" });
  } catch (error) {
    console.log(error);
    // return res.status(500).json({ message: "Internal server error" });
  }
};

