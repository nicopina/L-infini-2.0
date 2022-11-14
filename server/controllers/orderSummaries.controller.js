import { promisePool } from "../db.js";
import { getOrdersByOrderSummaryId } from "./orders.controller.js";

export const getOrderSummaries = async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Orders_sumaries");
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getOrderSummary = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Orders_sumaries WHERE id = ?",
      [req.params.id]
    );
    if (rows.length > 0) {
      return res.json(rows[0]);
    }
    return res.status(404).json({ message: "Ordersummary not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createOrderSummary = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "INSERT INTO Orders_sumaries SET ?",
      [req.body]
    );
    return res.json({ message: "OrderSummary saved" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateOrderSummary = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "UPDATE Orders_sumaries SET ? WHERE id = ?",
      [req.body, req.params.id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Orders_sumaries updated" });
    }
    return res.status(404).json({ message: "Orders_sumaries not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteOrderSummary = async (req, res) => {
  try {
    const [result] = await promisePool.query(
      "DELETE FROM Orders_sumaries WHERE id = ?",
      [req.params.id]
    );
    if (result.affectedRows > 0) {
      return res.status(200).json({ message: "Orders_sumaries deleted" });
    }
    return res.status(404).json({ message: "Orders_sumaries not found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getActiveOrderSummaries = async (req, res) => {
  try {
    const [rows] = await promisePool.query(
      "SELECT * FROM Orders_sumaries WHERE statuss = 1"
    );
    const activeOrders = [];
    for (const order of rows) {
      const orderList = await getOrdersByOrderSummaryId(order.id);
      activeOrders.push({ ...order, orderList });
    }
    // console.log('here');
    return res.json(activeOrders);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


