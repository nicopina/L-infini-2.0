import { promisePool } from "../db.js";
import { getOrdersByOrderSummaryId } from "./orders.controller.js";

/**
 * It gets all the order summaries from the database and returns them as a JSON object
 * @param res - the response object
 * @returns An array of order summaries.
 */
export const getOrderSummaries = async (req,res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM Orders_sumaries");
    return res.json(rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

/**
 * It gets the order summary with the given id from the database and returns it as a JSON object
 * @param req - The request object containing the order summary id.
 * @param res - The response object containing the order summary as JSON.
 * @returns The order summary with the given id.
 */
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

/**
 * It takes the request body, which is the order summary data, and inserts it into the database
 * @param req - The request object containing the order summary data.
 * @param res - The response object containing a message if the order summary was created successfully.
 * @returns a json object with a message if the order summary was created successfully.
 */
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

/**
 * It updates the order summary with the given id
 * @param req - The request object containing the order summary id and the order summary data.
 * @param res - The response object containing a message if the order summary was updated successfully.
 * @returns a json object with a message if the order summary was updated successfully.
 */
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

/**
 * It deletes an order summary from the database
 * @param req - The request object containing the order summary id.
 * @param res - The response object containing a message if the order summary was deleted successfully.
 * @returns a json object with a message if the order summary was deleted successfully.
 */
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

/**
 * It gets all the active orders from the database and returns them as a JSON object
 * @param res - The response object containing the active orders as JSON.
 * @returns An array of active orders.
 */
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
    console.log('here');
    return res.json(activeOrders);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};



